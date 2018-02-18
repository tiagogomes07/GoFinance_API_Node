/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('__MigrationHistory', {
    MigrationId: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    ContextKey: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    Model: {
      type: "LONGBLOB",
      allowNull: false
    },
    ProductVersion: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    tableName: '__MigrationHistory'
  });
};
