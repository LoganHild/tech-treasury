const { Post } = require('../models');

const postData = [
    {
        title: 'Thoughts',
        contents: 'I think this is hard.',
        date: '',
        user_name: '',
    },
    {
        title: 'MySQL',
        contents: 'This is confusing.',
        date: '',
        user_name: '',
    },
    {
        title: 'Confused',
        contents: 'I agree',
        date: '',
        user_name: '',
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost