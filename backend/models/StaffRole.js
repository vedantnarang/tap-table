const mongoose = require('mongoose');

const staffRoleSchema = new mongoose.Schema({
    role_name: {
        type: String,
        enum: ['owner', 'manager', 'kitchen', 'staff'],
        required: true
    },
    can_view_analytics: { type: Boolean, default: false },
    can_manage_menu: { type: Boolean, default: false },
    can_view_orders: { type: Boolean, default: false },
    can_update_order_status: { type: Boolean, default: false },
    can_view_financials: { type: Boolean, default: false }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: null }
});

module.exports = mongoose.model('StaffRole', staffRoleSchema);
