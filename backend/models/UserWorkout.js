const mongoose = require('mongoose');

const UserWorkoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  days: [
    {
      day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], required: true },
      workouts: [{
        workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WorkoutTemplate', // Optional: link to base workout
        }}]
    }]
});

module.exports = mongoose.model('UserWorkout', UserWorkoutSchema);
