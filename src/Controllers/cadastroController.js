const express = require("express")
const bcrypt = require ("bcryptjs")
const jwt = require("jsonwebtoken");
const app = express ();
app.use (express.json())
//Arquivo Env (nosso segredo).
process.loadEnvFile();



//Variável ENV disponivel
const SEGREDO = process.env.JWT_SECRET


function Registrar () {

}

