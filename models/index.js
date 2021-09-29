const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_name',
});

Post.belongsTo(User, {
    foreignKey: 'user_name',
    onDelete: 'CASCADE',
})

Post.hasMany(Comment, {
    foreignKey: 'comment_user'
});

Comment.belongsToMany(Post, {
    forignKey: 'comment_user',
});

module.exports = {
    User,
    Post,
    Comment,
};