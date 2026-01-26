const mongoose = require('mongoose');

const commissionRuleSchema = new mongoose.Schema({
    min_order_amount: { type: Number },
    max_order_amount: { type: Number },
    commission_type: {
        type: String,
        enum: ['flat', 'percentage'],
        required: true
    },
    commission_value: { type: Number, required: true },
    is_trial: { type: Boolean, required: true }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('CommissionRule', commissionRuleSchema);
