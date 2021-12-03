const { Path } = require("path-parser");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const { sendMail } = require("../services/mailService");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = await new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      userId: req.user.id,
      dateSent: Date.now(),
    });

    try {
      const mailResponse = await sendMail(survey);
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/surveys", requireLogin, async (req, res) => {
    res.send(
      await Survey.find({ userId: req.user.id })
        .select({ recipients: false })
        .sort("-dateSent")
    );
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");

    req.body
      .filter((event) => event.event === "click")
      .map((event) => {
        const match = p.test(new URL(event.url).pathname);
        if (match) {
          return { email: event.email, ...match };
        }
      })
      .forEach((event) => {
        Survey.updateOne(
          {
            _id: event.surveyId,
            recipients: {
              $elemMatch: { email: event.email, responded: false },
            },
          },
          {
            $inc: { [event.choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        ).exec();
      });
    res.send({}); // dont leave sendgrid hanging
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thanks for voting!");
  });
};
