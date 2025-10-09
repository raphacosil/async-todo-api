const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_task', 'postgres', '1234', {
  host: '127.0.0.1',
  dialect: 'postgres',
  port: 5432, // padrão do PostgreSQL
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o PostgreSQL estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

module.exports = sequelize;
