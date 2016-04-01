var express = require('express');
var app = express();
var api = require('./api/api');
var err = require('./middleware/errorMiddleware');

//setup the middleware
require('./middleware/appMiddleware')(app);

//setup the api
app.use('/api', api);

//setup the global error handling
app.use(err());

//export the api for testing
module.exports = app;

