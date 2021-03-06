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
    type: String,
    category: String,
    description: String,
    date : {
        type : Date,
        default: Date.now
    },
    time : {
        type : Date,
        default: Date.now
    },
    status: Boolean,
    place: String,
    organizer:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    activities : [{ type: Schema.Types.ObjectId, ref: 'activity' }]
});

module.exports = mongoose.model('event', EventSchema);