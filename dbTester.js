/**
 * Created by wchavarria-as on 31/03/2016.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/challengeSport');
var UserSchema = new mongoose.Schema({
    name: String
});

var User = mongoose.model('user', UserSchema);
User.create({
    name: 'Db User'
}).then(function( err, user){
    console.log(err, user);
});