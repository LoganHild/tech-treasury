const { User } = require("../models");
const bcrypt = require('bcryptjs')

var test1 = bcrypt.hashSync('test1');
var test2 = bcrypt.hashSync('test2');
var test3 = bcrypt.hashSync('test3');

const userData = [
  {
    username: "lhildebrandt",
    email: "logan@test.com",
    password: test1,
  },
  {
    username: "Hyplo",
    email: "hyplo@mail.com",
    password: test2,
  },
  {
    username: "crabby123",
    email: "crab@yahoo.com",
    password: test3,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;