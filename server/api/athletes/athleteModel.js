/**
 * Created by wchavarria-as on 04/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AthleteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birthday:{
        type: Date,
        required: true
    },
    Genre:{
        type: Boolean,
        required: true
    }

});

module.exports = mongoose.model('athlete', AthleteSchema);