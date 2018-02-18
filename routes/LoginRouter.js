var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection = require('../dal/Sequelize')();

router.get('/', function(req, res, next) {  
    
    var Login = require('../models/Login');
    var Login = Login(connection,Sequelize.DataTypes);

    connection.sync().then( function(){
        
        // Login.create(
        //     { PrimeiroNome : 'Tiago',
        //      SobreNome : 'Gomes', 
        //      UserName : 'tiago.gomes', 
        //      Password : '12345' });
             
        //      console.log('created');

        // Login.findById(2).then(function(Login){
        //     console.log(Login.dataValues);
        // })

        Login.findAll().then(function(Login){
           // console.log(Login);
           // console.log(Login.dataValues);
        })

    })

    res.send("Ok");
});

module.exports = router;