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
    description: String
});

module.exports = mongoose.model('organizer', OrganizerSchema);