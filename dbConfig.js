const mongoose = require("mongoose");
const dbConfig = "mongodb+srv://olivieana22:Agente007.@cluster0.vxuczuk.mongodb.net/anotacoes?retryWrites=true&w=majority";
//ness string vctem que mudar a sua senha que vai estar assim: <password>, e colocar o nome do local que vc quer ir na parte
//que deve ficar antes do ponto de interrogação "?" depois da barra "/".
const conexao = mongoose.connect(dvConfig,{
    useNewUrlParser: true,
    useUniFiedTopology: true
});

module.exports = conexao;