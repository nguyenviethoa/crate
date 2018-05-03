'use strict';
module.exports = (sequelize, DataTypes) => {
  var regions = sequelize.define('regions', {
    name: DataTypes.STRING
  }, {});
  regions.associate = function(models) {
    // associations can be defined here
  };
  return regions;
};