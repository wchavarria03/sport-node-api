/**
 * Created by Walter on 30/03/2016.
 */
module.exports = function() {
    return function(err, req, res, next){
        if(err.name === 'UnauthorizedError'){
            console.log('[Error]: Invalid Token');
            res.status(401).send('Invalid Token');
        } else if(err){
            console.log('[Error]: ' + err.message);
            res.status(500).send(err);
        }

        console.error(err.stack);
        res.status(500).send('Oops');
    };
};