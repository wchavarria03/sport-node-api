/**
 * Created by wchavarria-as on 29/03/2016.
 */
var app =  require('./server/server');
var port = 4001;

app.listen(port);
console.log('Running on port '+ port + '!!');
