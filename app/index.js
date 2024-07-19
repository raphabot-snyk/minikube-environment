var express = require('express');
var _ = require('lodash');
var app = express();
app.get('/', function (req, res) {
  res.send(`
    <h1>The Best Clock App</h1>
    Current date and time is: <b>${new Date(_.now())}</b>.`);
});
app.listen(80, function () {
  console.log('App listening on port 80');
});