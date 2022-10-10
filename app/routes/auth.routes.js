const express = require('express');
const { auth } = require('../controller/');
const app = express();

app.post('/sign-up',auth.lol)

module.exports = app;