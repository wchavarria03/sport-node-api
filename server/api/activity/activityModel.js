/**
 * Created by wchavarria-as on 04/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    capacity: Number,
    distance: String,
    price: String,
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event'
    }

});

module.exports = mongoose.model('activity', ActivitySchema);