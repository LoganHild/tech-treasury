const seedPost = require('./postData');
const seedUser = require('./userData');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n--- DATABASE SYNCED ---\n');
    await seedPost();
    console.log('\n--- CATEGORIES SEEDED ---\n');

    await seedUser('\n--- USER SEEDED ---\n');

    process.exit(0);
};

seedAll();