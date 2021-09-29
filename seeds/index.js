const seedPost = require('./postData');
const seedComment = require('./commentData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n--- DATABASE SYNCED ---\n');
    await seedPost();
    console.log('\n--- CATEGORIES SEEDED ---\n');

    await seedComment();
    console.log('\n--- COMMENTS SEEDED ---\n');

    process.exit(0);
};

seedAll();