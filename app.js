

const fs = require('fs');
const express = require('express');
const path = require('path')

const app = express();
app.use(express.json());


// - path.join(__dirname, "nome do arquivo") === GARANTE QUE O CAMINHO SEJA RELATIVO AO ARQUIVO E A LOCALIZAÇÃO DO CÓDIGO
dados = path.join(__dirname,'Repositories','arquivo.json')

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


    const data = fs.readFileSync(dados, 'utf8')
    const json = JSON.parse(data)
    json.push(req.body)
    fs.writeFileSync(dados, JSON.stringify(json,null,2));

    res.json(json)

})

//EDITAR.
app.post('/publicacao/:id', (req,res) => {

    
})


//DELETAR POR ID.
app.delete('/publicacao/:id', (req,res) => {
    const data = fs.readFileSync ("")

})



module.exports = app;




