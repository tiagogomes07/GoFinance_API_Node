var express = require('express');
var router = express.Router();

var sequelize = require('../dal/dalSequelize');

router.get('/', function(req, res, next) {  
    // dalMySql.CarregarLancamentos()
    // .then( x=> res.json(x) )
    // .catch( x=> res.status(500).json(x));   
    
   // var LoginModel = require('../models/LoginModel');
    
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('GoFinanceDB', 'bancoemail1', '5ff3f546', {
        host: 'bancoemail1.c3cpc4lfowun.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
    
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        },
    
        operatorsAliases: false
        // SQLite only
        
    });
        

    sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');

        
    const Login = sequelize.define('Login', {
        PrimeiroNome: Sequelize.STRING,
        SobreNome: Sequelize.STRING,
        UserName: Sequelize.STRING,
        Password :Sequelize.STRING
    })

  Login.create({ PrimeiroNome : 'Tiago', SobreNome : 'Gomes', UserName : 'tiago.gomes', Password : '12345' })


    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


    

    res.send("Ok");
});

module.exports = router;