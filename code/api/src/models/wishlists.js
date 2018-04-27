'use strict';
module.exports = (sequelize, DataTypes) => {
  var wishlists = sequelize.define('wishlists', {
    name: DataTypes.STRING
  }, {});
  wishlists.associate = function(models) {
    // associations can be defined here
  };
  return wishlists;
};