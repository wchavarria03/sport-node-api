/**
 * Created by wchavarria-as on 04/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var AthleteSchema = new Schema({
    name: String,
    email:String,
    birthday: {
        type: Date,
        required: true
    },
    genre: {
        type: Boolean,
        required: true
    },
    phone1: Number,
    shirtSize: String,
    emergencyInfo: {
        contact: String,
        phone: Number
    },
    laterality: Boolean,
    username: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true
    }
});

AthleteSchema.pre('save', function(next){
    if(!this.isModified('password')){
        return next();
    }

    this.password = this.encryptPassword(this.password);
    next();
});

AthleteSchema.methods = {
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

module.exports = mongoose.model('athlete', AthleteSchema);