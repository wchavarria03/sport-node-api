/**
 * Created by Walter on 30/03/2016.
 */
module.exports = function() {
    return function(err, req, resp, next){
        if(err){
            console.log('This is the error: ' + err.message);
            res.status(500).send(err);
        }
    };
};