const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get("/whoami", (req, res) => {
  const ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers['accept-language'].split(';')[0].split(',')[0];
  const software = req.headers['user-agent'].split('(')[1].split(')')[0];

  const responseObject = {
    ipaddress,
    language,
    software
  }

  res.end(JSON.stringify(responseObject, undefined, 2));
});

app.listen(port);