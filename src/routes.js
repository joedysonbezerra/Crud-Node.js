const express = require("express");
const requireDir = require("require-dir");
const controller = requireDir("./controllers"); // autoload de todos arquivo da pasta controllers

const routes = express.Router();

// Todas as rotas ficaram nesse arquivo

routes.get("/aluno/:id", controller.alunoController.buscar);
routes.post("/aluno", controller.alunoController.criar);
routes.put("/aluno/editar/:id", controller.alunoController.editar);
routes.delete("/aluno/excluir/:id", controller.alunoController.deletar);

module.exports = routes;
