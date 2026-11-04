

const fs = require('fs');
const express = require('express');
const path = require('path')

const app = express();
app.use(express.json());


// - path.join(__dirname, "nome do arquivo") === GARANTE QUE O CAMINHO SEJA RELATIVO AO ARQUIVO E A LOCALIZAÇÃO DO CÓDIGO

const dados = require("./Repositories/arquivo.json")
caminho = path.join(__dirname,'Repositories','arquivo.json')

//EXIBE TODO MEU ARQUIVO JSON

app.get ('/publicacao', (req,res) =>{
    res.json(dados);
})

//EXIBE PELO ID
app.get ('/publicacao/:id', (req,res) => {
    const postagem = req.params.id
    res.json(dados[postagem])
    
})

/*
-------------------------------------------------------------------------------
LER: readFIleSync -> 
TRANSFORMAR O JSON EM OBJETO: JSON.parse() -> 
ADICIONAR NO ARQUIVO LIDO: json.push -> 
SOBRESCREVER O ARQUIVO EXISTENTE: fs.writeFIleSync()
? JSON.stringify(json,null,2) ?
-------------------------------------------------------------------------------
*/


//ADICIONAR.
app.post('/publicacao', (req,res) => {


    const data = fs.readFileSync(caminho, 'utf8')
    const json = JSON.parse(data)
    json.push(req.body)
    fs.writeFileSync(caminho, JSON.stringify(json,null,2));

    res.json(json)

})

//EDITAR. 
app.put('/publicacao/:id', (req,res) => {

    const id = parseInt(req.params.id)

    const data = fs.readFileSync(caminho, 'utf8')
    const json = JSON.parse(data)

    const posicao = json.findIndex(i => i.id === id);

    json[posicao] = {...req.body, id: id};


    fs.writeFileSync(
        caminho,
        JSON.stringify(json,null,2))


    
}) // ALTERA APENAS O ITEM INFORMADO PELO ID


//DELETAR POR ID.
app.delete("/publicacao/:id", (req, res) => {
    const id = parseInt(req.params.id);

    // Ler os posts do arquivo ou da variável
    const novosPosts = dados.filter(post => post.id !== id);

    // Atualizar os dados
    novosPosts.push()

    fs.writeFileSync(caminho,JSON.stringify(novosPosts,null,2))

    res.status(201).json({
        mensagem: "Post deletado com sucesso",
    });
});



module.exports = app;




