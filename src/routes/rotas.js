const express = require('express')
const app = express
const PORTA = 8080

app.get("/login", (req, res) => {
    res.json("Estou na tela de Login")
});

app.post("/login", (req, res) => {

    // USANDO AS INFORMAÇÕES DA REQUISIÇÃO DE LOGIN
    const dados = req.body

    // VERIFICANDO O QUE TEM DENTRO DOS DADOS

    console.log(dados)

})


console.log(dados)

app.listen(PORTA, () => {
    console.log(`SERVIDOR: http://localhost:${PORTA}`);
});