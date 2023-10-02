const userService = require('./services');
const TaskService = require('../tasks/services')

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    res.status(200).json({ data: users });
  } 
  catch (error) {
    console.error(error);

    res.status(500).send('Internal Server Error');
  }
};

const getTasks = async (req, res) => {
  try {
    const userId = req.params.userId;
    const tasks = await TaskService.getTasksForUser(userId);

    res.status(200).json({ data: tasks });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getUsers,
  getTasks
};