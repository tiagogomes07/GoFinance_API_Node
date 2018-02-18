var express = require('express');
var router = express.Router();
var dalMySql = require('../dal/dbacess');

router.get('/', function(req, res, next) {  
    dalMySql.CarregarLancamentos()
    .then( x=> res.json(x) )
    .catch( x=> res.status(500).json(x));    
});

router.post('/GetRangeDatasAnalitico', function(req, res, next) {
   dalMySql.CarregarLancamentosRangeDatas(req.body.dtInicial,req.body.dtFinal)
   .then( x=> res.json(x) )
   .catch( x=> res.status(500).json(x));  
});

router.get('/GetRangeDatasSintetico', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/create', function(req, res, next) {
    
    dalMySql.Create(
        req.body.data, 
        req.body.tipoDC, 
        req.body.descricao, 
        req.body.valor, 
        req.body.historico, 
        req.body.Conta_Id, 
        req.body.Login_Id,
        req.body.Recurso_Id
    )
   .then( x=> res.json({'StatusSalvo':'Sucesso'}) )
   .catch( x=> res.status(500).json(x));  
   
});

router.post('/delete', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
