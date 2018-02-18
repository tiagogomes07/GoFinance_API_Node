/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Conta', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Login_Id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Login',
        key: 'Id'
      }
    }
  }, {
    tableName: 'Conta'
  });
};
