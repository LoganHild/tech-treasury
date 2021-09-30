const { Post } = require('../models');

const postData = [
    {
        title: 'Thoughts',
        contents: 'I think this is hard.',
        date: 'September 27, 2021 10:00:00',
        user_name: '1',
    },
    {
        title: 'MySQL',
        contents: 'This is confusing.',
        date: 'September 28, 2021 08:30:00',
        user_name: '1',
    },
    {
        title: 'Confused',
        contents: 'So lost.',
        date: 'September 29, 2021 14:01:00',
        user_name: '1',
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost