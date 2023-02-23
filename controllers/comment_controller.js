const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

module.exports.createComment = async function (req, res) {
   try {
      const post = await Post.findById(req.params.postid);
      
      if(post){
         let body = {
            content: req.body.content,
            author: req.userid,
            post: req.params.postid
         };
   
         const newComment = await Comment.create(body);
         post.comments.push(newComment);
         post.save();

         const author = await User.findById(req.userid);
   
         return res.status(200).json({
            success: true,
            data: {
               commentid: newComment._id,
               postid: req.params.postid,
               author: req.username,
               avatar: author.avatar,
               content: body.content,
            },
         });
      }

   } catch (err) {
      return res.json({
         success: false,
         message: "Error in posting new comment",
         Error: err,
      });
   }
};

module.exports.editComment = async function (req, res) {};

module.exports.deleteComment = async function (req, res) {};