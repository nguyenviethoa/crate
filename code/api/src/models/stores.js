'use strict';
module.exports = (sequelize, DataTypes) => {
  var stores = sequelize.define('stores', {
    name: DataTypes.STRING,
    pictures: DataTypes.STRING,
    phone: DataTypes.STRING,
    openhour: DataTypes.TIMESTAMP,
    closeHour: DataTypes.TIMESTAMP
  }, {});
  stores.associate = function(models) {
    // associations can be defined here
    stores.belongsToMany(models.offers, { through: 'offers_stores', as: 'offers' });
    stores.belongsTo(models.regions);
  };
  return stores;
};