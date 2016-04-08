/**
 * Created by wchavarria-as on 04/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganizerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: String,
    password: {
        type: String,
        required: true
    }
});

OrganizerSchema.pre('save', function(next){
    if(!this.isModified('password')){
        return next();
    }

    this.password = this.encryptPassword(this.password);
    next();
});

UserSchema.methods = {
    //check the password on signin
    authenticate: function(plainTextPword){
        return bcrypt.compareSync(plainTextPword, this.password);
    },

    encryptPassword: function(){
        if(!planTextPword){
            return '';
        } else {
            var salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(plainTextPword, salt);
        }

    }


}


module.exports = mongoose.model('organizer', OrganizerSchema);