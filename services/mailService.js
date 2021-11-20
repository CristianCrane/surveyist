const keys = require("../config/keys");
const sgmail = require("@sendgrid/mail");
sgmail.setApiKey(keys.sendgridApiKey);

function sendMail(survey) {
  const msg = {
    to: survey.recipients.map((r) => r.email),
    from: "cristiandcrane@gmail.com",
    subject: survey.subject,
    html: buildHtml(survey.title, survey.body),
  };

  return sgmail.sendMultiple(msg);
}

function buildHtml(title, body) {
  return `
    <html>
      <body style="text-align: center;">
        <h2>${title}</h2>
        <p>${body}</p>
        <a href="${keys.redirectDomain}/thanks">Yes</a>
        <a href="${keys.redirectDomain}/thanks">No</a>
      </body>
    </html>
  `;
}

module.exports = {
  sendMail,
};
