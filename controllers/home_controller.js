const Post = require("../models/post");
const User = require("../models/user");

module.exports.fetchAllFriends = async function (req, res) {
   try {
      let user = await User.findById(req.userid).populate('friendship.friends');

      if(user){
         let data = [];

         for (let i of user.friendship.friends) {
            let friend = {
               userid: i._id,
               username: i.username,
               avatar: i.avatar,
            };
            data.push(friend);
         }
   
         return res.status(200).json({
            success: true,
            data,
         });
      }

      throw new Error('User not found');
   } catch (err) {
      return res.json({
         success: false,
         message: "Unable to find friends",
      });
   }
};

module.exports.fetchAllPosts = async function (req, res) {
   try {
      let posts = await Post.find({})
         .sort("-createdAt")
         .populate("author")
         .populate({
            path: "comments",
            populate: {
               path: "author",
            },
         });
      
      let data = [];
      for(let i of posts) {
         let comments = [];
         if(i.comments.length > 0){
            comments = i.comments.map((comment) => {
               return {
                  author: comment.author.username,
                  avatar: comment.author.avatar,
                  content: comment.content,
               };
            });
         }
         let postBody = {
            postid: i._id,
            content: i.content,
            author: i.author.username,
            avatar: i.author.avatar,
            createdOn: i.createdOn,
            images: i.images,
            comments,
            likes: i.likes.length,
            liked: i.likes.includes(req.userid),
         };
         data.push(postBody);
      }
      
      return res.status(200).json({
         success: true,
         data,
      });
   } catch (err) {
      return res.json({
         success: false,
         flag: "Could not find posts",
         message: err
      });
   }
};

module.exports.fetchAllUsers = async function (req, res) {
   try {
      let users = await User.find({});

      let data = [];

      for (let i of users) {
         let user = {
            userid: i._id,
            username: i.username,
            avatar: i.avatar
         };
         data.push(user);
      }

      return res.status(200).json({
         success: true,
         data,
      });
   } catch (err) {
      return res.json({
         success: false,
         message: "Unable to find users",
      });
   }
};