'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Tasks', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'fk_userId_tasks',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Tasks', 'fk_userId_tasks');
  },
};
