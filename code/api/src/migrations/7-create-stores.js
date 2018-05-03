'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      pictures: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      openhour: {
        type: Sequelize.STRING
      },
      closeHour: {
        type: Sequelize.STRING
      },
      merchantId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'merchants',
          key: 'id'
        },
        allowNull: false
      },
      regionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'regions',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stores');
  }
};