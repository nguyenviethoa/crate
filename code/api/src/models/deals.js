'use strict';
module.exports = (sequelize, DataTypes) => {
  var deals = sequelize.define('deals', {
    name: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  deals.associate = function(models) {
    // associations can be defined here
    deals.belongsTo(models.consumers);
    deals.belongsTo(models.offers);
  };
  return deals;
};