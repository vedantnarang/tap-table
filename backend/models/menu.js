const mongoose = require('mongoose');
const restaurant = require('./restaurant');


const menuSchema = new mongoose.Schema({
    restaurantId: {
        ref: 'restaurant',
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('menu', menuSchema);