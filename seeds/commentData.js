const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        content: "Hello World"
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment