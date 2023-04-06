const Anotacao = require("../models/AnotacaoModel");
module.exports = {
    async read(req, res){
      //read recebe get
      //async pega/inclue informaçoes no banco de dados
        const anotacoesList = await Anotacao.find();
        //find pega todos os registros e guarda/processa em anotacoesList
        return res.json(anotacoesList);
    },

    async create(req, res){
        const {Titulo, Notas, Prioridade} = req.body;
        const anotacaoCriada = await Anotacoes.create({
            Titulo,
            Notas,
            Prioridade
        });
        return res.json(anotacaoCriada);
    }
}