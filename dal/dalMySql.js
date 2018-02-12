exports.carregar = function (){
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