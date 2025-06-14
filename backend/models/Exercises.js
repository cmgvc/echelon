const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const exerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ['strength', 'cardio', 'flexibility'] },
    duration: { type: Number}, // in seconds
    sets: { type: Number},
    reps: { type: Number },
    rest: { type: Number }, // in seconds
    weight: { type: Number, default: 0 }, // in lbs
});

module.exports = mongoose.model('Exercise', exerciseSchema);