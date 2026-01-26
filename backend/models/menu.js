const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, maxlength: 100, required: true },
    is_active: { type: Boolean, default: true }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('Menu', menuSchema);