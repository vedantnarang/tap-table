const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    business_name: { type: String, maxlength: 150 },
    owner_name: { type: String, maxlength: 100 },
    email: { type: String, required: true, unique: true, maxlength: 150 },
    phone: { type: String, required: true, unique: true, maxlength: 20 },
    password_hash: { type: String },
    trial_start: { type: Date },
    trial_end: { type: Date },
    trial_active: { type: Boolean, default: true },
    dashboard_locked: { type: Boolean, default: false }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('User', userSchema);
