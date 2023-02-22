const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const postController = require('../controllers/post_controller');

const handleImg = require("../middlewares/imageUpload");

router.use(auth.verifyUser);


// Route to create new post
router.post("/create", handleImg.uploadPost, postController.createPost);

// Route to edit a post
router.post("/:postid/edit", postController.editPost);

// Route to delete a post
router.delete("/:postid/delete", postController.deletePost);

// Route to delete a post
router.post("/:id/like", postController.likePost);


module.exports = router;