const TaskService = require('./services');

const createTask = async (req, res) => {
  try {
    const requestBody = req.body;

    const task = await TaskService.saveTask(requestBody);

    res.status(201).json({ data: task });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
    createTask,
};
