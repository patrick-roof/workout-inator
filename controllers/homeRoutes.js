const router = require('express').Router();
const { Workout, User } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  //added login requirements to the homepage.
  //the workouts will be locked from view until logged in.
  //TEST//
  //un-comment lines 10-28 to test
  // try {
  //   const workoutData = await Workout.FindAll({
  //     include: [
  //       {
  //         model: User,
  //         attributes: ['firstName', 'lastName'], // will this be okay? or; 
  //       },                                       // do we want to update the attribute to;
  //     ],                                         // 'name' or;
  //   });                                          // leave it as 'firstName' and 'lastName'?

  //   const workouts = workoutData.map((workout) => workout.get({ plain: true }));

  //   res.render('homepage', {
  //     workouts,
  //     logged_in: req.session.logged_in
  //   });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
    res.render('homepage')
})

router.get('/workoutpage', async (req, res) => {
  // try {
  //   const workoutData = await Workout.FindAll({
  //     include: [
  //       {
  //         model: User,
  //         attributes: ['firstName', 'lastName'], 
  //       },                                       
  //     ],                                        
  //   });                                         

    // const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    res.render('workoutpage', {
      // workouts,
      logged_in: req.session.logged_in
    });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
})

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/workoutpage');
      return;
    }
  
    res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/workoutpage');
    return;
  }

  res.render('signup');
});

router.get('/survey', (req, res) => {
    res.render('survey')
})

module.exports = router