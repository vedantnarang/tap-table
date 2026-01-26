const mongoose = require('mongoose');

const dailySalesSummarySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    total_orders: { type: Number, required: true },
    total_revenue: { type: Number, required: true },
    total_commission: { type: Number, required: true },
    net_revenue: { type: Number, required: true }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('DailySalesSummary', dailySalesSummarySchema);
