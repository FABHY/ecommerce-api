//routes/produtoRoutes.js
const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

//Rota para listar todos os produtos 
router.get('/produtos', async (req, res) => {
    try {
      const produtos = await Produto.find();
      res.json(produtos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

// Nova rota para filtrar produtos por categoria
router.get('/produtos/categoria/:categoria', async (req, res) => {
  try {
      const produtos = await Produto.find({ categoria: req.params.categoria });
      res.json(produtos);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


  
  // Rota para obter um produto por ID
  router.get('/produtos/:id', async (req, res) => {
    try {
      const produto = await Produto.findById(req.params.id);
      if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
      res.json(produto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  
  // Rota para criar um novo produto
  router.post('/produtos', async (req, res) => {
    const produto = new Produto(req.body);
    try {
      const novoProduto = await produto.save();
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Rota para atualizar um produto
  router.patch('/produtos/:id', async (req, res) => {
    try {
      const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
      res.json(produto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  
  // Rota para deletar um produto
  router.delete('/produtos/:id', async (req, res) => {
    try {
      const produto = await Produto.findByIdAndDelete(req.params.id);
      if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
      res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });







  
  module.exports = router;