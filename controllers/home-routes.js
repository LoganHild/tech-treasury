const router = require('express').Router();
const { Post } = require('../models');

const withAuth = require('../utils/auth');

//finds all post data
router.get('/', async (req,res) => {
  const postData = await Post.findAll().catch((err) => {
    res.json(err);
  });
  res.render('homepage', postData);
});

router.get('/post/:id', async (req,res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!postData) {
      res.status(404).json({ message: 'No post with this id!'});
      return;
    }
    const post = postData.get({ plain: true });
    res.render('post', post);
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