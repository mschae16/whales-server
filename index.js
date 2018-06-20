
const express = require('express');
const bodyParser = require('body-parser');

const dino = require('./data/dino');
const { getFact } = require('./utils/');

const PORT = process.env.PORT || 4000;
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/hello', (_, res) => {
  res.status(200)
     .send("Welcome to the Dino API!");
});

server.get('/facts/dino', (req, res) => {
  res.status(200)
     .send(getFact(dino.DinoData));
});

server.listen(PORT, () => {
  console.log('Server running on port ' + PORT + '.');
});
