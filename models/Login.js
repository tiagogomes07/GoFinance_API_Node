/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Login', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PrimeiroNome: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SobreNome: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UserName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Password: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'Login'
  });
};
