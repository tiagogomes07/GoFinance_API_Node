var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection = require('../dal/Sequelize')();
const crypto = require('crypto');
var Login = require('../models/Login');
var Login = Login(connection,Sequelize.DataTypes);

router.post('/create',function(req, res, next) {  
    
    connection.sync().then( function(){
        
       VerificarLogin(Login,req).then(function(result){
            if(result == false){   
                
                let password =  req.body.Password.toString()
                let hashPass = CriaHashPassword(password);                                                 
                Login.create(
                    { PrimeiroNome : req.body.PrimeiroNome,
                        SobreNome : req.body.SegundoNome, 
                        UserName : req.body.UserName, 
                        Password : hashPass }).                     
                then(function(){
                    res.send({'mymensage':'salvo com sucesso'});    
                })        
               
            }else{
                res.send({'mymensage':'Este login já está em uso'}); 
            }
       })
    })
});

router.post('/acess',function(req, res, next) {  
    connection.sync().then( function(){    
        VerificarUsarioSenha(Login,req).then( function(result){
            res.send({'mymensage': result}); 
        })        
    });

});

function VerificarLogin (Login,req){
   return Login.findAll({
            where:{ UserName: req.body.UserName}})
            .then( function(response) {
                console.log({'Ja existe login?':response});        
                if(response.length == 0){                                            
                    return false;
                }else{                                
                    return true;
                }  
            });
}

function VerificarUsarioSenha(Login,req){
    return new Promise( (resolve,reject) =>  {
        Login.findAll({
            where:{ UserName: req.body.UserName}
        }).then( function(user) {     
               if(user.length == 1){                                        
               let tryPass = CriaHashPassword(req.body.Password.toString())
                   if (tryPass == user[0].Password)                    
                       resolve({'mymensage':'senha confirmada, usuário logado'});    
                   else                        
                       resolve({'mymensage':'senha incorreta'});                         
               }else{                                
                       resolve({'mymesage':'usuario não existe'});
               }  
       });

    }) 
}

function CriaHashPassword(password){
    return  crypto.createHmac('sha256', password)
                    .update('tiagogomes07')
                    .digest('hex');
}

module.exports = router;