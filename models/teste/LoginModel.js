function GetSequelize(){
  return require("sequelize");
} 

module.exports = function () {
 var sequelize =  GetSequelize();
 
  const Login = sequelize.define('Login', {
      PrimeiroNome: Sequelize.STRING,
      SobreNome: Sequelize.STRING,
      UserName: Sequelize.STRING,
      Password :Sequelize.STRING
    })

    Login.create({ PrimeiroNome : 'Tiago', SobreNome : 'Gomes', UserName : 'tiago.gomes', Password : '12345' })
      
    

  return Login
}