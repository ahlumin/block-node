const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const app = express();
const server = http.Server(app);
const routes = require('./routes.js');
const machine = require('./mine-block.js');

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

server.listen(3000, function () {
  console.log('OwO');
});

machine.start();
