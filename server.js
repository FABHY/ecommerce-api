//server.js 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/database'); // Importe a função de conexão
const produtoRoutes = require('./routes/produtoRoutes'); // Importe as rotas de produtos
require('dotenv').config(); // Carrega as variáveis de ambiente

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Middleware para habilitar o CORS (se necessário)
app.use(cors());

// Conecte ao banco de dados
connectDB();

// Use as rotas de produtos
app.use('/api', produtoRoutes); // Todas as rotas de produtos começarão com /api/produtos

app.get('/', (req, res) => {
  res.send('API de E-commerce está rodando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
