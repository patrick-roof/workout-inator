const sequelize = require('../config/connection');
const { User, Workout, Gallery } = require('../models');

const userData = require('./userData.json');
const workoutData = require('./workoutData.json');
const galleryData = require('./galleryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const workouts = await Workout.bulkCreate(workoutData, {
    individualHooks: true,
    returning: true,
  });

  const gallerys = await Gallery.bulkCreate(galleryData, {
    individualHooks: true,
    returning: true,

  })

  process.exit(0);
};

seedDatabase();