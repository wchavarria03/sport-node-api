/**
 * Created by wchavarria-as on 30/03/2016.
 */

var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
};