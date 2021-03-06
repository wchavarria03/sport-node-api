/**
 * Created by wchavarria-as on 08/04/2016.
 */
var Organizer = require('../api/organizer/organizerModel');
var signToken = require('./auth').signToken;

exports.signin = function(req, res, next) {
    // req.user will be there from the middleware
    // verify user. Then we can just create a token
    // and send it back for the client to consume
    var token = signToken(req.user._id);
    res.json({token: token});
};
