const { User } = require('../models');

const userData = [
    {
        username: 'lhildebrandt',
        email: 'logan@mail.com',
        password: 'pizza614',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser