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
  reward:
});

//auto icrment task id
//https://stackoverflow.com/questions/51171529/generate-auto-increment-field-using-mongoose

//update specific task for the user
//https://stackoverflow.com/questions/15691224/mongoose-update-values-in-array-of-objects
