module.exports = function (){

    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('', 'bancoemail1', '5ff3f546', {
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
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

    return sequelize;
}
