const express = require('express');
const { auth } = require('../controller/');
const app = express();

app.post('/sign-up',auth.signUp)
app.post('/sign-in',auth.signIn)
app.post('/sign-out',auth.signOut)

module.exports = app;