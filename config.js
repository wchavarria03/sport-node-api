/**
 * Created by wchavarria-as on 29/03/2016.
 */
var config = {
    env: process.env.NODE_ENV || 'development',
    logging: false,

    secrets: {}
};

var envConfig = require('./' + config.env);

/*Lodash Assign*/
Object.prototype.extend = function(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            this[i] = obj[i];
        }
    }
};
/*End Lodash Assign*/

config.extend(envConfig);

module.exports = config || {};