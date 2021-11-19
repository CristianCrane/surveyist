const keys = require("../config/keys");
const sgmail = require("@sendgrid/mail");
sgmail.setApiKey(keys.sendgridApiKey);

const msg = {
  to: "cristiandcrane@gmail.com",
  from: "cristiandcrane@gmail.com",
  subject: "Sending with sendgrid is fun",
  text: "and easy to do anywhere, even from node.js",
  html: "<strong>and easy to do anywhere, even from node.js</strong>",
};

sgmail
  .send(msg)
  .then(() => console.log("email sent"))
  .catch(() => console.error("email failed"));
