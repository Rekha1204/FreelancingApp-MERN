const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  freelancerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  proposal: String,
  rate: Number,
  portfolioLink: String
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
