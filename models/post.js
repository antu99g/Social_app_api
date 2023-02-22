const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
   {
      content: {
         type: String,
      },
      author: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
      },
      createdOn: {
         type: String
      },
      images: [{
         type: String
      }],
      comments: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
         },
      ],
      likes: [
         {
            type: String,
         },
      ],
   },
   { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;