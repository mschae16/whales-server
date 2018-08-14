
const express = require('express');
const bodyParser = require('body-parser');

const whale = require('./data/whale');
const { getFact } = require('./utils/');

const PORT = process.env.PORT || 4000;
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/hello', (_, res) => {
  res.status(200)
     .send("Welcome to the Whale API!");
});

server.get('/facts/whale', (req, res) => {
  res.status(200)
     .send(getFact(whale.whaleData));
});

server.get('*', (req, res) => {
  res.status(404)
     .send('<h1>404: Not Found</h1>');
});

server.listen(PORT, () => {
  console.log('Server running on port ' + PORT + '.');
});
