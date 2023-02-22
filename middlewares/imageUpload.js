const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Post = require('../models/post');

const AVATAR_PATH = path.join("uploads/profiles");

const avatarStorage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", AVATAR_PATH));
   },
   filename: function (req, file, cb) {
      const extension = file.originalname.split(".");
      cb(null, file.fieldname + "-" + Date.now() + "." + extension[1]);
   },
});

module.exports.uploadedAvatar = multer({ storage: avatarStorage }).single("avatar");


const POSTS_PATH = path.join("uploads/posts");

const postStorage = multer.diskStorage({
   destination: async function (req, file, cb) {
      // console.log('file', file);
      const posts = await Post.find({});
      // console.log('length', posts.length);
      const dir = `${POSTS_PATH}/post-${posts.length || 0}`;
      try {
         if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            // console.log("Directory is created.");
         }
      } catch (err) {
         console.log("error in making dir", err);
      }

      cb(null, path.join(__dirname, "..", dir));
   },
   filename: function (req, file, cb) {
      // console.log('file', file.originalname);
      cb(null, file.originalname);
   },
});

module.exports.uploadPost = multer({ storage: postStorage }).array('images');