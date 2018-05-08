var express = require('express');
var app = express();
// ver path = require('path')
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {

res.sendFile(__dirname+'/dist/app/index.html');
});

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/app/index.html');
// });
