var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  tasks: [
    {
      text: String,
      isComplete: Boolean,
      id: Number,
    },
  ],
  rewards: [
    {
      text: String,
      duration: Number,
    },
  ],
});

const userModel = mongoose.model('user', UserSchema); // creating the model from the schema

module.exports = userModel; // exporting the model
