var express = require('express');
var router = express.Router();
var dalMySql = require('../dal/dbacess');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const connection = require('../dal/Sequelize')();
var Lancamento = require('../models/Lancamento')
Lancamento = Lancamento(connection,Sequelize.DataTypes);

router.get('/', function(req, res, next) {  
    dalMySql.CarregarLancamentos()
    .then( x=> res.json(x) )
    .catch( x=> res.status(500).json(x));    
});

router.post('/GetRangeDatasAnalitico', function(req, res, next) {
    connection.sync().then( function(){
        Lancamento.findAll({
            where: {
                Data: { [Op.between]: [req.body.dtInicial, req.body.dtFinal]  }              
            }
          })
          .then(  x=> res.json(x)  )
          .catch( x=> res.status(500).json(x));  
    })
});

router.post('/GetRangeDatasSintet', function(req, res, next) {
    connection.sync().then( function(){
        Lancamento.findAll({
            where: {
                Data: { [Op.between]: [req.body.dtInicial, req.body.dtFinal]  }              
            },
            attributes: ['Descricao', [ Lancamento.sequelize.fn('sum', Lancamento.sequelize.col('Lancamento.Valor')), 'Valor' ]] , 
            group: ['Descricao']
          })
          .then(  x=> res.json(x)  )
          .catch( x=> res.status(500).json(x));  
    }) 
});
        
router.post('/Create', function(req, res, next) {
    connection.sync().then( function(){
        Lancamento.create({
            Data      : req.body.data, 
            TipoDC    : req.body.tipoDC, 
            Descricao : req.body.descricao, 
            Valor     : req.body.valor, 
            Historico : req.body.historico       
        })
       .then( x=> res.json({'StatusSalvo':'Sucesso'}) )
       .catch( x=> res.status(500).json(x));       
    })    
});

router.post('/Delete', function(req, res, next) {
    connection.sync().then( function(){
        Lancamento.destroy({
            where: {
                id : req.body.DeleteId
            }
        })
       .then( x=> res.json({'Status':x}) )
       .catch( x=> res.status(500).json(x));       
    })   

});

module.exports = router;
