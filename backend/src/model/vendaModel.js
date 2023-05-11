const mongoose = require("mongoose");
const VendaModelSchema = new mongoose.Schema({

    Cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
            },

    cpfCliente:{ 
    type: mongoose.Schema.Types.String,
    ref: 'Cliente'},

    nomeCliente:{ 
        type: mongoose.Schema.Types.String,
        ref: 'Cliente'},

    Produto: String,

    Valor: String

});

module.exports = mongoose.model("Venda",VendaModelSchema);