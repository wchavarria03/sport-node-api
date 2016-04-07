/**
 * Created by Walter on 30/03/2016.
 */
module.exports = function() {
    return function(err, req, res, next){
        if(err){
            console.log('[Error]: ' + err.message);
            res.status(500).send(err);
        }
    };
};