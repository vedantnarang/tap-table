const mongoose = require('mongoose');

const orderPaymentSchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    upi_reference: { type: String, maxlength: 100 },
    paid_amount: { type: Number, required: true },
    verification_token: { type: String, maxlength: 100 },
    verification_status: {
        type: String,
        enum: ['pending', 'verified', 'failed'],
        default: 'pending'
    },
    paid_at: { type: Date }
});

module.exports = mongoose.model('OrderPayment', orderPaymentSchema);
