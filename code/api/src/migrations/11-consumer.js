module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consumers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      birthday: {
        type: Sequelize.DATE
      },
      // billingAddress
      // shippingAddress
      //phoneNumber
      //paymentMethod

      //preference
      pictures: {
        type: Sequelize.STRING
      },
      offerPrice: {
        type: Sequelize.INTEGER
      },
      regularPrice: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('consumers');
  }
}
