'use strict';
module.exports = (sequelize, DataTypes) => {
  var merchants = sequelize.define('merchants', {
    name: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  merchants.associate = function(models) {
    // associations can be defined here
  };
  return merchants;
};