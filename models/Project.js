const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  budget: Number,
  deadline: Date,
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['open', 'in progress', 'completed'],
    default: 'open',
  }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
