const mongoose = require('mongoose');

const upiDetailSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    upi_id: { type: String, maxlength: 100, required: true },
    bank_name: { type: String, maxlength: 100 },
    account_last4: { type: String, maxlength: 4 },
    is_verified: { type: Boolean, default: false }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('UpiDetail', upiDetailSchema);
