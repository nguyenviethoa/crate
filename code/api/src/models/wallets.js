'use strict';
module.exports = (sequelize, DataTypes) => {
  var wallets = sequelize.define('wallets', {
    name: DataTypes.STRING,
    balance: DataTypes.INTEGER
  }, {});
  wallets.associate = function(models) {
    // associations can be defined here
    wallets.belongsTo(models.consumers);
    wallets.belongsTo(models.merchants);
  };
  return wallets;
};