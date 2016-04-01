/**
 * Created by wchavarria-as on 01/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    place: String,
    description: String
});

module.exports = mongoose.model('event', EventSchema);