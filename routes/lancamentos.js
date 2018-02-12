var express = require('express');
var router = express.Router();
var dalMySql = require('../dal/dalMySql');

router.get('/', function(req, res, next) {  
    console.log({"Lancamentos responsing": dalMySql })
    dalMySql.carregar().then( x=> res.json(x) ).catch( x=> res.status(500).json(x));    
});

router.get('/GetRangeDatasAnalitico', function(req, res, next) {
   res.send("GetRangeDatasAnalitico");
});

router.get('/GetRangeDatasSintetico', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/create', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/delete', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
