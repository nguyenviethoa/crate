'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn(
      'merchants',
      'walletId',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    );
    queryInterface.sequelize.query("ALTER TABLE merchants ADD CONSTRAINT merchants_wallets FOREIGN KEY (walletId) REFERENCES wallets (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;");

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.removeColumn(
      'merchants',
      'walletId'
    );
   queryInterface.sequelize.query("ALTER TABLE merchants REMOVE CONSTRAINT merchants_wallets FOREIGN KEY (walletId) REFERENCES wallets (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;");
  }
};
