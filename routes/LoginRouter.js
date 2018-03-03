var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection = require('../dal/Sequelize')();
//var Q = require('q');

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

router.post('/create',function(req, res, next) {  
    
    var Login = require('../models/Login');
    var Login = Login(connection,Sequelize.DataTypes);

    connection.sync().then( function(){
        
       VerificarLogin(Login,req).then(function(result){
            if(result == false){              
               
                Login.create(
                { PrimeiroNome : req.body.PrimeiroNome,
                    SobreNome : req.body.SegundoNome, 
                    UserName : req.body.UserName, 
                    Password : req.body.Password }); 

                res.send({'mensage':'salvo com sucesso'});    
            }else{
                res.send({'mensage':'Este login já está em uso'}); 
            }
       })

        //verificar se já existe este login no banco de dados  
        //      console.log('created');

        // Login.findById(2).then(function(Login){
        //     console.log(Login.dataValues);
        // })

        Login.findAll().then(function(Login){
           // console.log(Login);
           // console.log(Login.dataValues);
        })

    })

});

function VerificarLogin (Login,req){
   return Login.findAll({
            where:{ UserName: req.body.UserName}
        })
        .then( function(response) {
            console.log({'Ja existe login?':response});        
            if(response.length == 0){            
                return false;
            }else{            
                return true;
            }  
        });
}


module.exports = router;