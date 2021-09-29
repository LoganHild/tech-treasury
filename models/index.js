const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {

});

Post.belongsTo(User, {

})

Post.hasMany(Comment, {

});

Comment.belongsTo(Post, {

});