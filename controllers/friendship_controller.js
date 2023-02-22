const User = require("../models/user");

module.exports.addFriendReq = async function (req, res) {
   try {
      const friend = await User.findById(req.params.id);

      if (friend) {
         let message;
         if (!friend.friendship.requests.includes(req.userid)){
            friend.friendship.requests.push(req.userid);
         } else {
            message = 'request already exists';
         }
         friend.save();

         return res.json({
            success: true,
            message: message || "Friend request sent successfully",
            data: { allRequests: friend.friendship.requests },
         });
      }

      throw new Error("Can't find user");
   } catch (err) {
      return res.json({
         success: false,
         flag: "Can't send friend request",
         message: err,
      });
   }
};

module.exports.removeFriendReq = async function (req, res) {
   try {
      const crrUser = await User.findById(req.userid).populate('friendship.requests');
      const profileUser = await User.findById(req.query.id).populate('friendship.requests');
      console.log("before", crrUser.friendship.requests.length);
      if (profileUser){
         if(req.query.self){
            crrUser.friendship.requests.pull(profileUser._id);
            crrUser.save();
            // data.requests = crrUser.friendship.requests;
         }
         else if (!req.query.self) {
            profileUser.friendship.requests.pull(crrUser._id);
            profileUser.save();
         }
   
         console.log("after", crrUser.friendship.requests.length);

         // console.log("friend request removed", crrUser.friendship.requests);
   
         return res.json({
            success: true,
            message: "friend request removed successfully",
            // data
         });
      }

      throw new Error("Can't find user");
   } catch (err) {
      return res.json({
         success: false,
         flag: "Can't remove friend request",
         message: err,
      });
   }
};

module.exports.addFriend = async function (req, res) {
   try {
      const friend = await User.findById(req.params.id);
      const user = await User.findById(req.userid).populate('friendship.requests');

      if (friend) {
         friend.friendship.friends.push(user._id);
         friend.save();

         user.friendship.friends.push(friend._id);
         user.friendship.requests.pull(friend._id);
         user.save();

         console.log("friend added successfully");
         return res.json({
            success: true,
            message: "friend added successfully",
         });
      }

      throw new Error("Can't find user");
   } catch (err) {
      return res.json({
         success: false,
         flag: "Can't add friend",
         message: err,
      });
   }
};

module.exports.removeFriend = async function (req, res) {
   try {
      const friend = await User.findById(req.params.id);
      const user = await User.findById(req.userid);

      if (friend) {
         friend.friendship.friends.pull(user._id);
         friend.save();
         
         user.friendship.friends.pull(friend._id);
         user.save();
         
         console.log("friend removed successfully");
         return res.json({
            success: true,
            message: "friend removed successfully",
         });
      }

      throw new Error("Can't find user");
   } catch (err) {
      return res.json({
         success: false,
         flag: "Can't remove friend",
         message: err,
      });
   }
};