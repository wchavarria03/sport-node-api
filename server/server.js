var express = require('express');
var app = express();
var api = require('./api/api');
var err = require('./middleware/errorMiddleware');
var config = require('./config/config');
var auth = require('./auth/routes');

// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url);

// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api/', api);
app.use('/auth', auth);

//setup the global error handling
app.use(err());

// export the app for testing
module.exports = app;
