const { Tasks } = require('../models');

const saveTask = async (requestBody) => {
  try {
    const savedTask = await Tasks.create({
      title: requestBody.title,
      description: requestBody.description,
      priority: requestBody.priority,
      userId: requestBody.userId,
    });

    return savedTask;
  } catch (error) {
    throw error;
  }
};

const getTasksForUser = async (userId) => {
    try {
      const tasks = await Tasks.findAll({
        where: { userId },
        order: [['priority', 'DESC']]
      });
  
      return tasks;
    } catch (error) {
      throw error;
    }
  };
  

module.exports = {
    saveTask,
    getTasksForUser
};
