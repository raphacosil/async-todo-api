const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task_db', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Conexão com o MySQL estabelecida com sucesso!');
} catch (error) {
  console.error('Não foi possível conectar ao banco de dados:', error);
}

module.exports = sequelize;