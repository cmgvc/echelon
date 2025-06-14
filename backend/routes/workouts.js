const express = require('express');
const router = express.Router();
const WorkoutTemplates = require('../models/WorkoutTemplates');

// Get workout
router.get('/workout', async (req, res) => {
  try {
    const { type } = req.query;
    if (!type) {
      return res.status(400).json({ message: 'Workout type is required' });
    }

    const workout = await WorkoutTemplates.findOne({ type });
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json(workout);
  } catch (err) {
    console.error('Error fetching workout:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
