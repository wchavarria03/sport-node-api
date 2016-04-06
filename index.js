/**
 * Created by wchavarria-as on 29/03/2016.
 */
var config =  require('./server/config/config');
var app =  require('./server/server');
var utils = require('./server/utils/utils');


//utils.objectExtend();
app.listen(config.port);

console.log('Listening on http://localhost:'+ config.port + '!!');
