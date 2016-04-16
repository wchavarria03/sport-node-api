/**
 * Created by wchavarria-as on 04/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
    name: String,
    email: String,
    birthday: Date,
    genre: Boolean,
    phone1:Number,
    phone2:Number,
    shirtSize: String,
    emergencyInfo: {
        contact: String,
        phone: Number
    },
    laterality: Boolean,
    organizerType: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: [
            function(password) {
                return password.length >= 6;
            },
            'Password should be at least 6 characters'
        ]
    },
    isOrganizer: {
        type: Boolean,
        required: true
    }
});

UserSchema.pre('validate', function(next){
    /*if (this.isOrganizer == true) {
        if(!this.name || !this.email || !this.phone1 ) {
            if(!this.name) {
                this.invalidate('name', 'Name field required');
                //next(new Error("Name field required"));
            } else if(!this.email) {
                this.invalidate('email', 'Email field required');
                //next(new Error("Email field required"));
            } else if(!this.phone1) {
                this.invalidate('phone1', 'Phone1 field required');
                //next(new Error("Phone1 field required"));
            }
        }
    } else if(this.isOrganizer == false) {
        if (!this.birthday || !this.genre) {
            if(!this.birthday) {
                this.invalidate('birthday', 'Birthday field required');
                //next(new Error("Birthday field required"));
            } else if(!this.genre) {
                this.invalidate('genre', 'Genre field required');
                //next(new Error("Genre field required"));
            }
        }
    }*/
    next();
});

UserSchema.pre('save', function(next){
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

    encryptPassword: function(plainTextPword){
        if(!plainTextPword){
            return '';
        } else {
            var salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(plainTextPword, salt);
        }

    }
};

module.exports = mongoose.model('user', UserSchema);