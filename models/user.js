const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   email: {
      type: String,
      required: true,
      unique: true,
   },
   username: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
   avatar: {
      type: String
   },
   description: {
      type: String
   },
   friendship: {
      friends: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
      }],
      requests: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
      }],
   },
});

const User = mongoose.model('User', userSchema);

module.exports = User;