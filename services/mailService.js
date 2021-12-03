const keys = require("../config/keys");
const sgmail = require("@sendgrid/mail");
sgmail.setApiKey(keys.sendgridApiKey);

function sendMail(survey) {
  const msg = {
    to: survey.recipients.map((r) => r.email),
    from: "cristiandcrane@gmail.com",
    subject: survey.subject,
    html: buildHtml(survey),
  };

  return sgmail.sendMultiple(msg);
}

function buildHtml(survey) {
  return `
    <html>
      <body style="text-align: center;">
        <h2>${survey.title}</h2>
        <p>${survey.body}</p>
        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
      </body>
    </html>
  `;
}

module.exports = {
  sendMail,
};
