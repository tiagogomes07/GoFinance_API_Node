/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Lancamento', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TipoDC: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Historico: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Conta_Id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Conta',
        key: 'Id'
      }
    },
    Login_Id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Login',
        key: 'Id'
      }
    },
    Recurso_Id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Recurso',
        key: 'Id'
      }
    }
  }, {
    tableName: 'Lancamento'
  });
};
