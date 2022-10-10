const express = require('express');
const app = express();

app.get('**',(req,res)=>{
    res.send('<h1>Invalid Api Request</h1>')
    res.status(404).send({status:'404', message:'Invalid Api Request'});
})
app.post('**',(req,res)=>{
    res.status(404).send({status:'404', message:'Invalid Api Request'});
})

module.exports = app;