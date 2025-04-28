//models/produto.js
const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String },
    preco: { type: Number, required: true },
    estoque: { type: Number, default: 0 },
    categoria: { type: String, required: true }, // Adicionando o campo categoria
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Produto', ProdutoSchema);