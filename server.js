var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/app/index.html');
});
