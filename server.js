// Require basic npm packages: `express`, `body-parser` and `path`.
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

// Create express server
var app = express();

// PORT will work on local host 8080
var PORT = process.env.PORT || 8080;

// Create application/json parser
var jsonParser = bodyParser.json()

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Standard bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json({ type: 'application/**json' }))
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// Add apiRoutes file to server
require('./app/routing/apiRoutes.js')(app);
// add htmlRoutes file to server
require('./app/routing/htmlRoutes.js')(app);

// Check if server is running when running node server.js in command line
app.listen(PORT, function () {
    console.log("FriendFinderApp listening on PORT: " + PORT);
});

