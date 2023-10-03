const { Users } = require('../models');

const getAllUsers = async () => {
    try {
      const users = await Users.findAll();
      return users;
    } 
    catch (error) {
      throw error;
    }
  };
  
  module.exports = {
    getAllUsers,
  };