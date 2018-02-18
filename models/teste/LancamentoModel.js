var sequelize = require("sequelize");

const Lancamento = sequelize.define('Lancamento', {
    Data:        Sequelize.DATE,
    TipoDC:      Sequelize.INTEGER,
    Descricao:   Sequelize.STRING,
    Valor :      Sequelize.DOUBLE,
    Historico :  Sequelize.STRING,
    Conta_Id :   Sequelize.INTEGER,
    Login_Id :   Sequelize.INTEGER,
    Recurso_Id : Sequelize.INTEGER
  })

  