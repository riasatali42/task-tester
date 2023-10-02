'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const names = [
      'S M Riasat Ali',
      'Md. Kamrozzaman Bhuiyan',
      'Md. Ashikuzzaman',
      'Md. Afikur Rahman Khan'
    ];

    const usersData = names.map((name) => ({
      name: name,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    return queryInterface.bulkInsert('Users', usersData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
