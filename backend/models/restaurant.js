const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true//for login 
    },
    email: {
        type: String,
        required: true,
        unique: true,//for login 
    },
    password: {
        type: String,
        required: true
    },
    totalTables: {
        type: Number,
        default: 2,
    },
    tables: [{
        number: Number,
        qrLink: String,
        status: {
            default: 'idle',
            type: String,
            enum: [
                'idle',
                'occupied',
                'ordered',
                'accepted',
                'preparing',
                'completed_and_paid'
            ]
        },
    }],
    subscriptionPlan: {
        enum: ['free trail', 'starter', 'professional', 'enterprise'],
        default: 'free trail',
        type: String
    }
}, { timestamps: true }
);

module.exports = mongoose.model('restaurant', restaurantSchema);