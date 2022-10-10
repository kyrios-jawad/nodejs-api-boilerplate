const express = require('express');
const app = express();
const Invalid = require('./invalid.routes')

app.use('**',Invalid);

module.exports = app;