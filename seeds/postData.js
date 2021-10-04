const { Post } = require('../models');

const postData = [
    {
        title: 'Thoughts',
        contents: 'I think this is hard.',
        user_id: '1',
    },
    {
        title: 'MySQL',
        contents: 'This is confusing.',
        // user_id: '1',
    },
    {
        title: 'Confused',
        contents: 'So lost.',
        // user_id: '1',
    },
    {
        title: 'No Idea',
        contents: 'I feel stupid.',
        // user_id: '1',
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost