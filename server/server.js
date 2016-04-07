var express = require('express');
var app = express();
var api = require('./api/api');
var err = require('./middleware/errorMiddleware');
var config = require('./config/config');

//setup the middleware
require('./middleware/appMiddleware')(app);

require('mongoose').connect(config.db.url);

//setup the api
app.use('/api', api);

//setup the global error handling
app.use(err());

//export the api for testing
module.exports = app;

