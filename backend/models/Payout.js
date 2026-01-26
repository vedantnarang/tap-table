const mongoose = require('mongoose');

const payoutSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    total_collected: { type: Number, required: true },
    commission_deducted: { type: Number, required: true },
    payout_amount: { type: Number, required: true },
    status: {
        type: String,
        enum: ['pending', 'processed'],
        required: true
    },
    processed_at: { type: Date }
}, {
    timestamps: { createdAt: null, updatedAt: null }
});

module.exports = mongoose.model('Payout', payoutSchema);
