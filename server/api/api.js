/**
 * Created by wchavarria-as on 30/03/2016.
 */
var router = require('express').Router();

var userRouter = require('./users/userRoutes');
var eventRouter = require('./events/eventRoutes');

app.use('/users', userRouter);
app.use('/events', eventRouter);




app.use(function(err, req, res, next){
    if(err){
        console.log(err.message);
        res.status(500).send(err);
    }
});

module.exports = router;