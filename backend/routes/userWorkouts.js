const express = require('express');
const router = express.Router();
const UserWorkout = require('../models/UserWorkout');

// Create or update user workout plan
router.post('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { days } = req.body;

    // Upsert: update if exists, else create
    const workoutPlan = await UserWorkout.findOneAndUpdate(
      { userId },
      { userId, days, workouts: days.map(day => day.workouts) },
      { new: true, upsert: true }
    );

    res.status(200).json(workoutPlan);
  } catch (err) {
    console.error('Error saving user workout:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user's workout plan
router.get('/:userId', async (req, res) => {
  try {
    const plan = await UserWorkout.findOne({ userId: req.params.userId }).populate('days.workout');
    if (!plan) return res.status(404).json({ message: 'Workout plan not found' });
    res.json(plan);
  } catch (err) {
    console.error('Error fetching user workout:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete user's workout plan
router.delete('/:userId', async (req, res) => {
  try {
    await UserWorkout.findOneAndDelete({ userId: req.params.userId });
    res.json({ message: 'Workout plan deleted' });
  } catch (err) {
    console.error('Error deleting workout plan:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// // Adjust user's workout plan based on cycle phase
// router.post('/:userId/adjust', async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const { cyclePhase } = req.body;

//         // Fetch the user's workout plan
//         const workoutPlan = await UserWorkout
//             .findOne({ userId })
//             .populate('days.workout');
//         if (!workoutPlan) {
//             return res.status(404).json({ message: 'Workout plan not found' });
//         }
//         // Adjust the workout plan based on the cycle phase
//         const adjustedDays = workoutPlan.days.map(day => {
//             if (cyclePhase === 'follicular') {
//                 // Increase intensity for follicular phase
//                 return { ...day, workouts: day.workouts.map(workout => ({ intensity: 'high', ...workout })) };
//             } else if (cyclePhase === 'ovulatory') {
//                 // Maintain moderate intensity for ovulatory phase
//                 return { ...day, workouts: day.workouts.map(workout => ({ intensity: 'moderate', ...workout })) };
//             } else if (cyclePhase === 'luteal') {
//                 // Decrease intensity for luteal phase
//                 return { ...day, workouts: day.workouts.map(workout => ({ intensity: 'low', ...workout })) };
//             } else {
//                 // Default to low intensity for menstrual phase
//                 return { ...day, workouts: day.workouts.map(workout => ({ intensity: 'low', ...workout })) };
//             }
//         });
//         // Save the adjusted workout plan
//         workoutPlan.days = adjustedDays;
//         await workoutPlan.save();
//         res.json(workoutPlan);
//     } catch (err) {
//         console.error('Error adjusting user workout:', err);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

module.exports = router;