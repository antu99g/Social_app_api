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
      let extension = file.originalname.split(".");
      extension = extension[extension.length - 1];
      cb(null, file.fieldname + "-" + Date.now() + "." + extension);
   },
});

module.exports.uploadedAvatar = multer({ storage: avatarStorage }).single("avatar");


const POSTS_PATH = path.join("uploads/posts");

const postStorage = multer.diskStorage({
   destination: async function (req, file, cb) {
      const posts = await Post.find({});
      const dir = `${POSTS_PATH}/post-${posts.length || 0}`;
      try {
         if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            req.currentDir = dir;
         } else {
            console.log('post directory already present');
         }
      } catch (err) {
         console.log("error in making directory");
      }

      cb(null, path.join(__dirname, "..", dir));
   },
   filename: function (req, file, cb) {
      cb(null, file.originalname);
   },
});

module.exports.uploadPost = multer({ storage: postStorage }).array('images');