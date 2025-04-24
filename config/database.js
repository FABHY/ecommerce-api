// config/database.js
const mongoose = require('mongoose');
require('dotenv').config(); // Carrega as variáveis de ambiente do .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1); // Encerra o processo em caso de falha na conexão
  }
};

module.exports = connectDB;