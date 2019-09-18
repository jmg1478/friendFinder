// node_modules
var express = require ('express');
var path = require('path');
var bodyParser = require('body-parser');

// run and port var
var app = express();
var PORT = process.env.PORT || 7845;
// .use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
// localhost url extentions
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);
// node port running function
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});