const mongoose = require("mongoose");

const alunoSchema = new mongoose.Schema({
  matricula: {
    type: Number,
    required: true, // campo Obrigátorio
    unique: true
  },
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Aluno", alunoSchema);
