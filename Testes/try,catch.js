//TRY CATCH EXEMPLO

/* app.get('/teste', async(req,res,next) => {
    try {

        //PREPARANDO ERRO
        const numero = 0;
        console.log(1/numero); // VAI DAR ERRO
        
        //throw: Joga o ero para fora do bloco try, indo direto pro catch
        //new Error: Cria um objeto "Error" com uma mensagem.

        throw new Error ('Algo deu Errado!');


    } //CASO PEGUE UM ERRO: o "err" = a mensagem que joguei para fora na linha de cima. (throw new Error)
    catch (err) {
        next(err);
    }
});

//PRÓXIMO MIDDLEWARE.
app.use((err,req,res,next) =>{
    res.status(500).json({message : err.message})
});

 */