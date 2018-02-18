
exports.CarregarLancamentos = function (){
    return new Promise((resolve, reject) => {
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
            host     : 'bancoemail1.c3cpc4lfowun.us-east-1.rds.amazonaws.com',
            user     : 'bancoemail1',
            password : '5ff3f546',
            database : 'GoFinanceDB'
        });

            connection.connect();
            connection.query('SELECT * FROM GoFinanceDB.Lancamento ', function (error, results, fields) {
                connection.end()
                if (error) {
                    reject(error);   
                    return;
                }                
                resolve(results);
            })
    })
}

exports.CarregarLancamentosRangeDatas = function (dtInicial,dtFinal){
    return new Promise((resolve, reject) => {

        var mysql      = require('mysql');
        var connection = mysql.createConnection({
            host     : 'bancoemail1.c3cpc4lfowun.us-east-1.rds.amazonaws.com',
            user     : 'bancoemail1',
            password : '5ff3f546',
            database : 'GoFinanceDB'
        });

            connection.connect();
            connection.query('SELECT * FROM GoFinanceDB.Lancamento WHERE Data >= ? and Data <= ?',[dtInicial, dtFinal], function (error, results, fields) {
                connection.end()
                if (error) {
                    reject(error);   
                    return;
                }                
                resolve(results);
            })
    })
}

exports.CarregarLancamentosRangeDatas = function (dtInicial,dtFinal){
    return new Promise((resolve, reject) => {

        var mysql      = require('mysql');
        var connection = mysql.createConnection({
            host     : 'bancoemail1.c3cpc4lfowun.us-east-1.rds.amazonaws.com',
            user     : 'bancoemail1',
            password : '5ff3f546',
            database : 'GoFinanceDB'
        });

            connection.connect();
            connection.query('SELECT * FROM GoFinanceDB.Lancamento WHERE Data >= ? and Data <= ?',[dtInicial, dtFinal], function (error, results, fields) {
                connection.end()
                if (error) {
                    reject(error);   
                    return;
                }                
                resolve(results);
            })
    })
}


exports.Create = function (data,tipoDC,descricao,valor,historico){
    return new Promise((resolve, reject) => {

        var mysql      = require('mysql');
        var connection = mysql.createConnection({
            host     : 'bancoemail1.c3cpc4lfowun.us-east-1.rds.amazonaws.com',
            user     : 'bancoemail1',
            password : '5ff3f546',
            database : 'GoFinanceDB'
        });

        var records = [
            [data,tipoDC,descricao,valor,historico]
          ];

            connection.connect();
            connection.query(
                "INSERT INTO Lancamento(Data,TipoDC,Descricao,Valor,Historico) VALUES ?",records, function (error, results, fields) {
                connection.end()
                if (error) {
                    reject(error);   
                    return;
                }                
                resolve(results);
            })
    })
}

