const express = require('express');
const app = express();
const Invalid = require('./invalid.routes')
const auth = require('./auth.routes')

app.use('/auth',auth);
app.use('**',Invalid);

module.exports = app;