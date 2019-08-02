const express = require('express');
const rotas = new express.Router();
const DadosController = require('./controller/DadosController');

rotas.post("/Criar", DadosController.cadastrarNovo);
rotas.get("/Pessoas",DadosController.mostrarPessoas);
rotas.delete("/Deletar",DadosController.deletarPessoas);

module.exports = rotas;
