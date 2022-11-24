
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('page_loads', {
      userAgent: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      time: {
        primaryKey: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('page_loads');
  }
};