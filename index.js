const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/hello', (req, res) => {
  res.status(200)
     .send("Welcome to the Dino API!");
});

server.listen(PORT, () => {
  console.log('Server running on port ' + PORT + '.');
});
