'use strict';
module.exports = (sequelize, DataTypes) => {
  var consumers = sequelize.define('consumers', {
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    parrainerCode: DataTypes.TEXT,
    wishlish: DataTypes.STRING
  }, {});
  consumers.associate = function(models) {
    // associations can be defined here
    consumers.belongsToMany(models.offers, { through: 'deals', as: 'offers' });
  };
  return consumers;
};