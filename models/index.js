const User = require('./User');
const Post = require('./Post');

// User.hasMany(Post);

// Post.belongsTo(User, {
//     foreignKey: 'user_name',
// })

module.exports = {
    User,
    Post,
};