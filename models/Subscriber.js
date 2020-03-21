const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema

const SubscriberSchema = new Schema({
   first_name: {
       type: String,
       required: true
   },
    second_name: {
       type: String,
        required: true
    },
    country: {
       type: String,
        required: true
    },
    email: {
       type: String,
        required: true
    }
});

module.exports = Subscriber = mongoose.model('subscriber', SubscriberSchema);