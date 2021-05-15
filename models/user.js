var mongoose = require('mongoose');

var User = new mongoose.Schema({
  name: String,
  email: String,
  tasks: [
    {
      text: String,
      completed: Boolean,
      id: Int,
    },
  ],
  reward:String,
});

const userModel = mongoose.model("user", userSchema) // creating the model from the schema

module.exports = userModel // exporting the model