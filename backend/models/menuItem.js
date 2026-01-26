const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    menu_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
    item_name: { type: String, maxlength: 100, required: true },
    price: { type: Number, required: true },
    is_available: { type: Boolean, default: true }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('MenuItem', menuItemSchema);