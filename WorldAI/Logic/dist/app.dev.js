"use strict";

var express = require('express');

var app = express(); //Middlewares

/* app.use('/post', ()=>{
    console.log('your on Post ');
}); */
//routes

app.get('/', function (req, res) {
  res.send('we are running');
});
app.get('/post', function (req, res) {
  res.send('we are on Post');
}); //how do we start 

app.listen(3000);