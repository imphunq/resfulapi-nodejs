const dotenv = require('dotenv').config();
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const routes = require('./api/routes');
routes(app);

app.listen(port);

console.log('App listen at localhost:'+port);
