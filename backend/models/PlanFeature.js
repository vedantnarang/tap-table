const mongoose = require('mongoose');

const planFeatureSchema = new mongoose.Schema({
    plan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
    feature_key: { type: String, maxlength: 50, required: true },
    feature_value: { type: String, maxlength: 50, required: true }
});

module.exports = mongoose.model('PlanFeature', planFeatureSchema);
