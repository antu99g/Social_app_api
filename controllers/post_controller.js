const Post = require('../models/post');
const User = require('../models/user');
const fs = require("fs");
const moment = require('moment');

module.exports.createPost = async function (req, res) {
   try {
      const today = moment().format("DD MMM, YYYY");
      let postBody = {
         author: req.userid,
         createdOn: today,
         comments: [],
         likes: [],
      };
      const author = await User.findById(req.userid);
      const newPost = await Post.create(postBody);
      
      const imagePaths = []; // path of all posted images

      if(req.files.length > 0){
         const newDir = `uploads/posts/post-${newPost.id}`;

         if (fs.existsSync(req.currentDir)) {
            fs.renameSync(req.currentDir, newDir);
            console.log('directory rename successful in create-post controller');
         }         

         for(let file of req.files){
            imagePaths.push(`${newDir}/${file.originalname}`);
         }
      }

      newPost.content = req.body.content;
      newPost.images = imagePaths;
      await newPost.save();

      return res.status(200).json({
         success: true,
         data: {
            postid: newPost._id,
            content: newPost.content,
            author: req.username,
            avatar: author.avatar,
            createdOn: today,
            images: newPost.images,
            comments: [],
            likes: 0,
            liked: false,
         },
      });

   } catch (err) {      
      return res.json({
         success: false,
         message: "Error in creating new post",
         Error: err
      });
   }
};

module.exports.editPost = async function (req, res) {
   try {
      const post = await Post.findById(req.params.postid);
      if (post) {
         for(let image of post.images){
            if(!req.body.images.includes(image)){
               if(fs.existsSync(image)){
                  fs.unlinkSync(image);
                  console.log('image file deleted successfully');
               }
            }
         }

         post.content = req.body.content;
         post.images = req.body.images;
         post.save();
         
         if (post.images.length < 1) {
            const folderPath = `uploads/posts/post-${post.id}`;
            if(fs.existsSync(folderPath)){
               fs.rmdirSync(folderPath);
            }
         }

         return res.json({
            success: true,
            message: "Post edited successfully",
         });
      }

      throw new Error("post not found");
   } catch (err) {
      return res.json({
         success: false,
         message: "Error in editing post data",
         Error: err,
      });
   }
};

module.exports.deletePost = async function (req, res) {
   try {
      const user = await User.findById(req.userid);
      if(user){
         await Post.findByIdAndDelete(req.params.postid);

         const postImagesPath = `uploads/posts/post-${req.params.postid}`;
         if (fs.existsSync(postImagesPath)) {
            fs.rmSync(postImagesPath, { recursive: true });
            console.log('directory deleted successfully');
         }

         return res.json({
            success: true,
            message: 'Post deleted successfully'
         });
      }
      throw new Error('user not found');
      
   } catch (err) {
      return res.json({
         success: false,
         message: "Error in deleteing post",
         Error: err,
      });
   }
};

module.exports.likePost = async function (req, res) {
   try {
      const post = await Post.findById(req.params.id);
      
      if(post){
         const liked = post.likes.includes(req.userid);
         if(liked){
            post.likes.pull(req.userid);
            post.save();
         } else {
            post.likes.push(req.userid);
            post.save();
         }

         return res.json({
            success: true,
            likes: post.likes.length,
            liked: !liked  // opposite of previous state of like
         });
      }
      
      throw new Error("Can't find post");
   } catch (err) {  
      return res.json({
         success: false,
         message: "Error in like",
         Error: err,
      });
   }
};