/**
 * Created by wchavarria-as on 04/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var OrganizerSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique : true
    },
    phone1:{
        type: Number,
        required: true
    },
    phone2:Number,
    organizerType : String,
    username: {
        type: String,
        required: true,
        unique: true
    },
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

OrganizerSchema.methods = {
    //check the password on signin
    authenticate: function(plainTextPword){
        return bcrypt.compareSync(plainTextPword, this.password);
    },

    encryptPassword: function(plainTextPword){
        if(!plainTextPword){
            return '';
        } else {
            var salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(plainTextPword, salt);
        }

    },

    toJson: function(){
        var obj = this.toObject();
        delete obj.password;
        return obj;
    }
};




module.exports = mongoose.model('organizer', OrganizerSchema);