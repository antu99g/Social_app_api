const express = require('express');
const router = express.Router();

const auth = require("../middlewares/auth");

const userController = require('../controllers/user_controller');

const handleImg = require('../middlewares/imageUpload');


// Route to register new user
router.post("/signup", userController.signup);

// Route for log-in
router.post("/login", userController.login);

// Details of a user from id
router.get("/:id/details", userController.userDetails);

// Route to get all posts of a user
router.get("/:id/posts", auth.verifyUser, userController.fetchPosts);

// Route to edit user details
router.post("/edit", auth.verifyUser, userController.updateUserDetails);

// Route to edit profile image
router.post("/edit/avatar", handleImg.uploadedAvatar, auth.verifyUser, userController.updateUserAvatar);


router.use("/friend", require("./friend"));

module.exports = router;