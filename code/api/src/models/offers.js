'use strict';
module.exports = (sequelize, DataTypes) => {
  var offers = sequelize.define('offers', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    validDay: DataTypes.DATE,
    quantities: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    reservationDealCoins: DataTypes.INTEGER,
    earnDealCoins: DataTypes.INTEGER,
    pictures: DataTypes.STRING,
    offerPrice: DataTypes.INTEGER,
    regularPrice: DataTypes.INTEGER
  }, {});
  offers.associate = function(models) {
    // associations can be defined here
    offers.belongsToMany(models.stores, { through: 'offers_stores', as: 'stores' });
    offers.belongsToMany(models.consumers, { through: 'deals', as: 'consumers' });
  };
  return offers;
};