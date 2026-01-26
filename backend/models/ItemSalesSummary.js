const mongoose = require('mongoose');

const itemSalesSummarySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    menu_item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    date: { type: Date, required: true },
    quantity_sold: { type: Number, required: true },
    total_revenue: { type: Number, required: true }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('ItemSalesSummary', itemSalesSummarySchema);
