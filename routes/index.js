// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const PORT = process.env.PORT || 3000;
const userModel = require('../models/user.js');

// app.use(bodyParser.json());

function success(res, payload) {
  return res.status(200).json(payload);
}

module.exports = function (app) {
  app.post('/get-tasks', async (req, res, next) => {
    console.log('req.', req.body);
    try {
      let newUser;
      const singleUser = await userModel.findOne({
        name: req.body.given_name,
        email: req.body.email,
      });
      if (!singleUser) {
        newUser = new userModel({
          name: req.body.given_name,
          email: req.body.email,
        });
        newUser.save();
      }
      console.log(singleUser);
      res.json(singleUser || newUser);

      // return success(res, tasks);
    } catch (err) {
      console.log(err);
      next({ status: 400, message: 'failed to get tasks' });
    }
  });

  app.post('/tasks', async (req, res, next) => {
    console.log('We his the task route!!', req.body);
    try {
      await userModel.updateOne(
        { name: req.body.userName },
        // { name: 'Jasmine' },
        {
          tasks: req.body.todos,
        }
      );
      res.json({ message: 'updated user!' });
      // const task = await db.task.create(req.body);
      // return success(res, task);
    } catch (err) {
      console.log(err);
      next({ status: 400, message: 'failed to create task' });
    }
  });

  app.put('/tasks/:id', async (req, res, next) => {
    try {
      const task = await db.task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return success(res, task);
    } catch (err) {
      console.log(err);
      next({ status: 400, message: 'failed to update task' });
    }
  });
  app.delete('/tasks/:id', async (req, res, next) => {
    try {
      await db.task.findByIdAndRemove(req.params.id);
      return success(res, 'task deleted!');
    } catch (err) {
      console.log(err);
      next({ status: 400, message: 'failed to delete task' });
    }
  });

  // app.use((err, req, res, next) => {
  //   return res.status(err.status || 400).json({
  //     status: err.status || 400,
  //     message: err.message || 'there was an error processing request',
  //   });
  // });
};

// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });
