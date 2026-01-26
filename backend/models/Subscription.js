const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    plan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    status: {
        type: String,
        enum: ['active', 'expired', 'cancelled'],
        required: true
    },
    amount_paid: { type: Number, required: true }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
