const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

const friendshipController = require("../controllers/friendship_controller");

router.use(auth.verifyUser);

// Route to add a friend
router.post("/add_request/:id", friendshipController.addFriendReq);

// Route to send friend-request
router.post("/remove_request", friendshipController.removeFriendReq);

// Route to remove friend-request
router.post("/add/:id", friendshipController.addFriend);

// Route to remove a friend
router.post("/remove/:id", friendshipController.removeFriend);


module.exports = router;