const mongoose = require('mongoose');

const cycleSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  periodStart: {
    type: Date,
    required: true,
  },
  periodEnd: {
    type: Date,
    required: true,
  },
  cycleLength: {
    type: Number,
    default: 28, // default cycle length in days
  },
  symptoms: {
    type: [String], // optional, array of symptoms
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Cycle', cycleSchema);
