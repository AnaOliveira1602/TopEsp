const express = require("express");
const rotas = express.Router();
const AnotacaoController = require("./controller/AnotacaoController");
//const AnotacaoCliente = require("./controller/ClienteController");

//seçao para definiçao das rotas de anotaçoes
rotas.get("/anotacoes", AnotacaoController.read);
rotas.post("/anotacoes", AnotacaoController.create);
rotas.delete("/anotacoes/:id", AnotacaoController.delete);
rotas.post("/anotacoes/:id", AnotacaoController.update);

//seçaopara definiçao das rotas dos clientes
//rotas.get("/clientes", AnotacaoCliente.read);

module.exports = rotas;

//clientes nao existe, é so um exemplo
