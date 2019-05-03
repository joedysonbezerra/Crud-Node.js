const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const path = require("path");
const dbConfig = require("./config/database.json");

const app = express();

mongoose.connect(dbConfig.url, dbConfig.flag);
// Isso é a mesma coisa que ./src/models
const modelsCaminho = path.resolve("src", "models");
requireDir(modelsCaminho);

//rotas globais
app.use(express.json()); // parser em json
app.use("/api", require("./src/routes"));

app.listen(3030, () => {
  console.log("Servidor iniciado ...");
});
