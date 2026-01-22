const mongoose = require('mongoose');
const restaurant = require('./restaurant');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: false,
        enum:['owner','manager','waiter','chef','staff'],
        default:'staff'
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurant',
        required: true
    }
});

module.exports = mongoose.model('users', userSchema);