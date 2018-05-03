module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('offers_stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      storeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'stores',
          key: 'id'
        },
        allowNull: false
      },
      offerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'offers',
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
    return queryInterface.dropTable('offers_stores');
  }
}
