const mongoose = require("mongoose");
const aluno = mongoose.model("Aluno");

module.exports = {
  async criar(req, res, next) {
    try {
      const alunoCriado = await aluno.create(req.body);
      res.json(alunoCriado);
    } catch (error) {
      next(error); // vai cair na ultima rota que iremos criar a de erro
    }
  },
  async buscar(req, res, next) {
    try {
      // const alunoEncontrado = await aluno.findById(req.params.id);
      const alunoEncontrado = await aluno.findOne({ matricula: req.params.id });
      res.json(alunoEncontrado);
    } catch (error) {
      next(error);
    }
  },
  async deletar(req, res, next) {
    try {
      await aluno.findOneAndDelete({ matricula: req.params.id });
      res.send();
    } catch (error) {
      next(error);
    }
  },
  async editar(req, res, next) {
    try {
      const { matricula, nome, idade, sexo } = req.body;
      const alunoEditado = await aluno.findOneAndUpdate(
        { matricula: req.params.id }, // parametro de busca
        { matricula, nome, idade, sexo }, // o que eu vou editar
        { new: true }
      );
      res.json(alunoEditado);
    } catch (error) {
      next(error);
    }
  }
};
