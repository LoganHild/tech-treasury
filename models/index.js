const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {

});

Post.belongsto(User, {
    
})