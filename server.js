// NÃO ESTOU CONSEGUINDO STARTAR


const app = require('./src/app');

const app = require('./app');

const PORTA = 8000

app.listen(PORTA,() =>{
        console.log(`ESTOU ESCUTANDO O SERVIDOR NA PORTA 8000! http://localhost:${PORTA}`)
        })