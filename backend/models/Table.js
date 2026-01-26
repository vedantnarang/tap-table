const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    table_number: { type: String, maxlength: 20, required: true },
    qr_token: { type: String, maxlength: 100, unique: true, required: true }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('Table', tableSchema);
