const functions = require('firebase-functions');
const slack = require('./slack.js');
const slackPath = '/services/T16PAT935/BGXAX9F96/yfqToZZLkaTk8f9vrUKDZDnb';

exports.sendSlack = functions.firestore.document('contacts/{contactId}').onCreate((snap, context) => {
  const d = snap.data();

  return slack({
    path: slackPath,
    message: `name: ${d.name}\n\nemail: ${d.email}\n\nmessage:\n${d.message}`,
  });
});
