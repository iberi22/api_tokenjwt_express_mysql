'use strict';
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Cuentas', {
    name: DataTypes.STRING
  });

  Model.prototype.toWeb = function (pw) {
      let json = this.toJSON();
      return json;
  };

  return Model;
};