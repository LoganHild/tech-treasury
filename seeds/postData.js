
const { Post } = require("../models");

const postData = [
  {
    title: "McDonald's is life",
    content: "McDonald's is king, change my mind.",
    user_id: 1,
  },
  {
    title: "Feeling lit feeling light",
    content: "2am, Summer Night, *insert awesome beat here*.",
    user_id: 2,
  },
  {
    title: "Bored",
    content: "Bored in the house and I'm in the house bored.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;