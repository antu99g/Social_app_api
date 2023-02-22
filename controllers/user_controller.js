const User = require('../models/user');
const Post = require('../models/post');
const jwt = require('jsonwebtoken');
const path = require("path");
const fs = require("fs");

module.exports.signup = async function (req, res) {
   try {
      let user = await User.findOne({ email: req.body.email });
      
      if (user) {
         return res.status(208).json({
            success: true,
            message: "User already registered",
            data: {
               id: user._id,
               username: user.username,
               friendship: user.friendship,
            },
         });
      } else {
         const body = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            avatar: 'uploads/profiles/default/avatar.png',
            description: '',
            friendship: {
               friends: [],
               requests: [],
            },
         };
         
         const newUser = await User.create(body);

         return res.status(200).json({
            success: true,
            data: {
               id: newUser._id,
               ...body
            },
         });
      }
   } catch (err) {
      return res.status(404).json({
         success: false,
         message: "Error in signing up",
         error: err,
      });
   }
}

module.exports.login = async function (req, res) {
   try {
      let user = await User.findOne({ email: req.body.email });

      if (user && user.password == req.body.password) {
         const token = jwt.sign({ userid: user._id }, "sercretKey");

         return res.status(200).json({
            success: true,
            user: {
               userid: user._id,
               username: user.username,
               avatar: user.avatar
            },
            token,
         });
      }

      throw new Error('User not found');
   } catch (err) {
      return res.json({
         success: false,
         message: "Error in username or password",
      });
   }
}

module.exports.userDetails = async function (req, res) {
   try{
      const userProfile = await User.findById(req.params.id)
      .populate("friendship.friends")
      .populate("friendship.requests");
      
      if(userProfile){
         const { id, username, avatar, description, friendship } = userProfile;
         const data = {
            userid: id,
            username,
            avatar: avatar,
            description,
         };
         const friends = friendship.friends.map((friend) => {
            return {
               userid: friend._id,
               username: friend.username,
               avatar: friend.avatar,
            };
         });
         data.friends = friends;
         
         const requests = friendship.requests.map((request) => {
            return {
               userid: request._id,
               username: request.username,
               avatar: request.avatar,
            };
         });
         data.requests = requests;         

         return res.json({success: true, data});
      }

      throw new Error("user not found");
   } catch(err) {      
      return res.json({
         success: false,
         flag: "Could not find user details",
         message: err,
      });
   }
}

module.exports.fetchPosts = async function (req, res) {
   try {
      // console.log('function working');
      let user = await User.findById(req.params.id);
      
      if(user){
         let posts = await Post.find({ author: req.params.id })
         .sort("-createdAt")
            .populate("author")
            .populate({
               path: "comments",
               populate: {
                  path: "author",
               },
            });
         
         let data = [];
         
         if(posts.length > 0){
            for(let i of posts){
               let postBody = {
                  postid: i._id,
                  content: i.content,
                  author: i.author.username,
                  avatar: user.avatar,
                  createdOn: i.createdOn,
                  images: i.images,
                  comments: i.comments || [],
                  likes: i.likes.length,
                  liked: i.likes.includes(req.userid),
               };
               // console.log("liked", postBody.liked);
               data.push(postBody);
            }
         }
   
         return res.status(200).json({
            success: true,
            data,
         });
      }
      
      throw new Error('user not found');
      
   } catch (err) {
      return res.json({
         success: false,
         flag: "Could not find posts",
         message: err,
      });
   }
}

module.exports.updateUserDetails = async function (req, res) {
   try{
      let updatedData;

      if (req.body.username) {
         const updatedUser = await User.findByIdAndUpdate(req.userid, { username: req.body.username }, {new: true});
         updatedData = {username: updatedUser.username};
         console.log(updatedData);
      }
      else if (req.body.description) {
         const updatedUser = await User.findByIdAndUpdate(req.userid, { description: req.body.description }, {new: true});
         updatedData = {description: updatedUser.description};
         console.log(updatedData);
      }
      else {
         throw new Error('no data found');
      }

      return res.json({
         success: true,
         data: updatedData,
      });
      
   } catch(err) {
      return res.json({
         success: false,
         flag: "Unable to edit user details",
         message: err,
      });
   }
};

module.exports.updateUserAvatar = async function (req, res){
   try{
      const user = await User.findById(req.userid);

      if(!user){
         throw new Error("user not found");
      }

      // console.log('avatar', user.avatar);
      const currentAvatar = user.avatar.split("/")[2];
      // console.log("currentAvatar", currentAvatar);
      if (currentAvatar !== "default") {
         const currentAvatarPath = path.join(__dirname, "..", user.avatar);
         if (fs.existsSync(currentAvatarPath)) {
            fs.unlinkSync(currentAvatarPath);
            // console.log('deleted');
         }
      }
      
      // console.log('filename', req.filename);
      user.avatar = 'uploads/profiles/' + req.file.filename;
      user.save();

            
      return res.json({
         success: true,
         data: {avatar: user.avatar}
         // imageURI: user.avatar
      });

   } catch(err) {
      return res.json({
         success: false,
         flag: "Unable to edit user details",
         message: err,
      });
   }
}