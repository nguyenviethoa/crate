'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wallets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      balance: {
        type: Sequelize.INTEGER
      },
      merchantId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'merchants',
          key: 'id'
        },
        allowNull: false
      },
      consumerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'consumers',
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
    return queryInterface.dropTable('wallets');
  }
};