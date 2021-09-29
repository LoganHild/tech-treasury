const router = require('express').Router();
const { Post, User } = require('../models');

const withAuth = require('../utils/auth');

//finds all user data
router.get('/', async(req,res) => {
  try {
    const dbUserData = await User.findAll({
      include: [{ model: Post }]
    });
    res.status(200).json(dbUserData);
    } catch (err) {
        res.status(500).json(err);
    }
});