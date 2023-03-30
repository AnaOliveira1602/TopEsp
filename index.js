const express = require("express");
const app = express();
require("./config/dbConfig");
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({
        nome: "Ana",
        idade: 21,
        sexo: "Gosta",
        salario: 5000
    });
})

app.listen(8081);

