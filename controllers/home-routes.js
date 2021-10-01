const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

//finds all post data
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    const users = userData.map((blog) =>
      blog.get({ plain: true })
    );

    res.render('homepage', {
      users,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req,res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render('login');
})

module.exports = router;