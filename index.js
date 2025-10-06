const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    process.exit(1);
  }
  console.log('Conectado ao MySQL com sucesso.');
});

app.get('/', (req, res) => {
  res.send('Servidor Node.js com MySQL e Express ativo!');
});

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
