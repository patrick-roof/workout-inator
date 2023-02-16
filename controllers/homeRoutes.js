const router = require('express').Router();
const { Workout, User, Gallery, Survey } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});

// -↓-↓-↓-↓-↓- GET all [3] galleries for workoutpage -↓-↓-↓-↓-↓-

router.get('/workoutpage', withAuth, async (req, res) => {
  console.log('/workoutpage');
  try {
    const galleryData = await Gallery.FindAll({
      include: [
        {
          model: Workout,
          attributes: ['title', 'muscle_group_focus'],
        },
      ],
    });
    console.log(galleryData);

    const galleries = galleryData.map((gallery) =>
      gallery.get({ plain: true })
    );

    res.render('workoutpage', {
      galleries,
      logged_in: req.session.logged_in,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// -↓-↓-↓-↓-↓- PROFILE ROUTER -↓-↓-↓-↓-↓- PENDING

// router.get('/profile', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [
//           {
//             model: User,
//             attributes: [
//               'firstName',
//               'lastName',
//               'goal',
//               'daily_calories'
//             ],
//           }],
//       });
//       console.log(userData)

//       const user = userData.get({ plain: true });

//       res.render('profile', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// -↓-↓-↓-↓-↓- LOGIN ROUTER -↓-↓-↓-↓-↓-

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/workoutpage');
    return;
  }

  res.render('login');
});

// -↓-↓-↓-↓-↓- SIGNUP ROUTER -↓-↓-↓-↓-↓-

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/workoutpage');
    return;
  }

  res.render('signup');
});

// -↓-↓-↓-↓-↓- SURVEY ROUTER -↓-↓-↓-↓-↓-

router.get('/survey', (req, res) => {
  res.render('survey');
});

module.exports = router;

// -↓-↓-↓-↓-↓- GET ONE GALLERY ROUTER -↓-↓-↓-↓-↓-

// router.get('/gallery/:id', withAuth, async (req, res) => {
//   try {
//     const galleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Workout,
//           attributes: ['title', 'muscle_group_focus'],
//         },
//       ],
//     });

//     const gallery = galleryData.get({ plain: true });
//     res.render('gallery', {
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// -↓-↓-↓-↓-↓- GET ONE WORKOUT ROUTER -↓-↓-↓-↓-↓-

// router.get('/workout/:id', withAuth, async (req, res) => {
//   console.log('/workout/:id')
//     try {
//         const workoutData = await Workout.findByPk(req.params.id);
//         const workout = workoutData.get({ plain: true });

//         res.render('workout', {
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });
