const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    table_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
    total_amount: { type: Number, required: true },
    status: {
        type: String,
        enum: ['pending', 'paid', 'cancelled', 'delivered'],
        default: 'pending'
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('Order', orderSchema);
