const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const cycleRoutes = require('./routes/cycle');
app.use('/cycles', cycleRoutes);

const userWorkoutRoutes = require('./routes/userWorkouts');
app.use('/user-workouts', userWorkoutRoutes);

const workoutRoutes = require('./routes/workouts');
app.use('/workouts', workoutRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the Authentication API');
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test route is working!' });
});

module.exports = app;
