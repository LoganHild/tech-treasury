const seedPost = require('./postData');
const seedUser = require('./userData');
const seedComment = require('./commentData');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n--- DATABASE SYNCED ---\n');

    await seedPost();
    console.log('\n--- POSTS SEEDED ---\n');

    await seedUser();
    console.log('\n--- USER SEEDED ---\n')

    await seedComment();
    console.log('\n--- COMMENTS SEEDED ---\n')

    process.exit(0);
};

seedAll();