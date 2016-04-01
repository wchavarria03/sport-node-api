/**
 * Created by wchavarria-as on 29/03/2016.
 */

//default config object for our api
var config = {
    dev: 'development',
    test: 'testing',
    prod: 'production',
    port: process.env.PORT || 4000
};

// check to see if the NODE_ENV was set, if not, the set it to dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

//set config.env to whatever the NODE_ENV is
config.env = process.env.NODE_ENV;


var envConfig;

try {
    envConfig = require('./' + config.env);
    envConfig = envConfig || {};
} catch(e){
    envConfig = {};
}

/*Lodash Assign*/
Object.prototype.extend = function(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            this[i] = obj[i];
        }
    }
};
/*End Lodash Assign*/

/*Extend the default config object with the loaded config object*/
config.extend(envConfig);

module.exports = config;