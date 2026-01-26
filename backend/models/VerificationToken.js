const mongoose = require('mongoose');

const verificationTokenSchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    token: { type: String, maxlength: 100, required: true },
    expires_at: { type: Date, required: true },
    is_used: { type: Boolean, default: false }
});

module.exports = mongoose.model('VerificationToken', verificationTokenSchema);
