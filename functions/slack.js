const https = require('https');
const hostname = 'hooks.slack.com';

module.exports = (params) => {
  const data = JSON.stringify({
    "text": params['message']
  });

  const options = {
    hostname,
    port: 443,
    path: params['path'],
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', resolve);
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}
