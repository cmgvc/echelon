const express = require('express');
const { getCyclePhase } = require('../utils/cyclePhase');
const Cycle = require('../models/Cycle');
const authMiddleware = require('../middleware/auth'); 

const router = express.Router();

// Create a new cycle log
router.post('/', authMiddleware, async (req, res) => {
  const { periodStart, periodEnd, cycleLength, symptoms } = req.body;
  try {
    const newCycle = new Cycle({
      user: req.user.id,
      periodStart,
      periodEnd,
      cycleLength: cycleLength || 28,
      symptoms: symptoms || [],
    });
    await newCycle.save();
    res.status(201).json(newCycle);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all cycle logs for the authenticated user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const cycles = await Cycle.find({ user: req.user.id }).sort({ periodStart: -1 });

    const enrichedCycles = cycles.map(cycle => ({
      ...cycle.toObject(),
      currentPhase: getCyclePhase(cycle.periodStart, cycle.cycleLength),
    }));

    res.json(enrichedCycles);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


// Update a cycle log by id
router.put('/:id', authMiddleware, async (req, res) => {
  const { periodStart, periodEnd, cycleLength, symptoms } = req.query;
  try {
    const cycle = await Cycle.findOne({ _id: req.params.id, user: req.user.id });
    if (!cycle) return res.status(404).json({ message: 'Cycle not found' });

    if (periodStart) cycle.periodStart = periodStart;
    if (periodEnd) cycle.periodEnd = periodEnd;
    if (cycleLength) cycle.cycleLength = cycleLength;
    if (symptoms) cycle.symptoms = symptoms;

    await cycle.save();
    res.json(cycle);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get current cycle phase
router.get('/current-phase', authMiddleware, async (req, res) => {
  try {
    const latestCycle = await Cycle.findOne({ user: req.user.id }).sort({ periodStart: -1 });
    if (!latestCycle) return res.status(404).json({ message: 'No cycle data found' });

    const phase = getCyclePhase(latestCycle.periodStart, latestCycle.cycleLength);
    res.json({ phase });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
