const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: { type: String, maxlength: 50, required: true },
    price: { type: Number, required: true },
    billing_cycle: {
        type: String,
        enum: ['monthly', 'yearly'],
        required: true
    },
    is_active: { type: Boolean, default: true }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('Plan', planSchema);
