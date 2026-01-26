const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    action: { type: String, maxlength: 100, required: true },
    metadata: { type: mongoose.Schema.Types.Mixed }, // JSON storage
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('AuditLog', auditLogSchema);
