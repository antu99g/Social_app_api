const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

const commentController = require("../controllers/comment_controller");

router.use(auth.verifyUser);


// Route to create new comment
router.post("/:postid/create", commentController.createComment);

// Route to edit a comment
router.post("/:id/edit", commentController.editComment);

// Route to delete a comment
router.delete("/:id/delete", commentController.deleteComment);

// Route to delete a comment
// router.post("/:id/like", commentController.likeComment);

// Route to delete a comment
// router.post("/:id/unlike", commentController.unlikeComment);

module.exports = router;
