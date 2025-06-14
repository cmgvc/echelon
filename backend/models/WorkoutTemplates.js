const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const Exercises = require('./Exercises');

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ['highIntensity', 'lowIntensity'] },
  effortLevel: { type: Number, required: true },
  exercises: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise',
    required: true
  }],
});

module.exports = mongoose.model('WorkoutTemplate', workoutSchema);