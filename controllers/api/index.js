const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const workoutRoutes = require('./workoutRoutes');
// What will the workoutRoutes be used for? --Eli

router.use('/users', userRoutes);
// router.use('/workouts', workoutRoutes);

module.exports = router;