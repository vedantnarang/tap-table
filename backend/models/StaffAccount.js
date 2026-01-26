const mongoose = require('mongoose');

const staffAccountSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'StaffRole', required: true },
    name: { type: String, maxlength: 100, required: true },
    phone: { type: String, maxlength: 20 },
    password_hash: { type: String, required: true },
    is_active: { type: Boolean, default: true }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('StaffAccount', staffAccountSchema);
