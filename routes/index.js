const express = require('express');
const router = express.Router();

console.log('router loaded');

const auth = require("../middlewares/auth");

const homeController = require('../controllers/home_controller');


// Route to get all friends
router.get("/friends", auth.verifyUser, homeController.fetchAllFriends);

// Route to get all posts
router.get("/posts", auth.verifyUser, homeController.fetchAllPosts);

// Route to get all users
router.get("/users", homeController.fetchAllUsers);


router.use('/user', require('./user'));
router.use('/post', require('./post'));
router.use('/comment', require('./comment'));

module.exports = router;