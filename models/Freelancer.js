const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skills: [String],
  experience: String,
  rating: Number
}, { timestamps: true });

module.exports = mongoose.model('Freelancer', freelancerSchema);
