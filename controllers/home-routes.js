const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

//finds all post data
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.render('post', {
      posts
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  
});

router.post('/', async (req, res) => {
  const postData = await Post.findAll().catch((err) => {
    res.json(err);
  });
  console.log(postData)
  res.render('post', { postData })
})

router.get('/post/:id', async (req,res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!postData) {
      res.status(404).json({ message: 'No post with this id!'});
      return;
    }
    const posts = postData.get({ plain: true });
    res.render('post', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/login', (req,res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render('login');
})

module.exports = router;