
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dino = require('./data/dino');
const { getFact } = require('./utils/');

const PORT = process.env.PORT || 4000;
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

corsOptions = {
  origin: 'http://localhost:3000'
}

server.use(cors(corsOptions))

//--------------------------------------------   Routes

server.get('/hello', (_, res) => {
  res.status(200)
     .send("Welcome to the Dino API!");
});

server.get('/facts/dino', (req, res) => {
  res.status(200)
     .json({ body: getFact(dino.DinoData) });
});

server.get('*', (req, res) => {
  res.status(404)
     .send('<h1>404: Not Found</h1>');
});

server.listen(PORT, () => {
  console.log('Server running on port ' + PORT + '.');
});
