//models/produto.js
const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    descricao: {type: String },
    preco: {type: Number, required: true},
    estoque: {type: Number,default:0},

    // para adionar mais campos e categorias 
    createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Produto', ProdutoSchema);
