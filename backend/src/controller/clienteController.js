const Cliente = require("../model/clienteModel");

module.exports = {

    async read (req, res){
 
            const clienteList = await Cliente.find();
            return res.json(clienteList);

    },

    async create (req ,res){

    try{
        const {Nome, CPF, Email, Telefone, Fidelidade} = req.body;
        const clienteCreate = await Cliente.create({
            Nome: Nome,
            CPF: CPF,
            Email: Email,
            Telefone: Telefone, 
            Fidelidade: Fidelidade
        });
        return res.json(clienteCreate);
    }catch (err){
        return res.status(400).send({error: 'Error ao criar cliente.'})
    }


    },

    async delete (req ,res){
        try{
        const { id } = req.params;
        const clienteDelete = await Cliente.findOneAndDelete({ _id:id});

        if(clienteDelete){
            return res.json(clienteDelete);
        }
    }catch (err){
        return res.status(400).send({error: 'Usuario não encontrado!!!'})
    }

    },

    async update (req, res){
        try{
        const { id } = req.params;
        const {Nome, CPF, Email, Telefone, Fidelidade} = req.body;
        const clienteUpdate = await Cliente.findOne({ _id:id});

            clienteUpdate.Nome = Nome;
            clienteUpdate.CPF = CPF;
            clienteUpdate.Email = Email;
            clienteUpdate.Telefone = Telefone;
            clienteUpdate.Fidelidade = Fidelidade;

        await clienteUpdate.save();
    return res.json(clienteUpdate);
}catch (err){
    return res.status(400).send({error: 'Alteração não concluida, ID não encontrado.'})
}
}

};