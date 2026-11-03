/* // Objetos JAVA SCRIPT

const carro = {
    marca:"ford",
    modelo:"ka",
    ano:2015, 
    placa:"ABC-1234",

    //METODO: PROPRIEDADE COM UMA FUNÇÃO DENTRO DELA.
    buzina: function() {alert('BIIIIIIIIIIIIIII')},
    completo: function() {
        return "A marca é " +this.marca +" e o modelo é: "+this.modelo;
    }
};

const leao = {}

leao.peso ="50kg"
leao.altura = "2 Metros"

/* 
Elvis Operator Retorna undefined ao invés de quebrar o código : 
---- console.log(cliente.endereço.rua?.nome?.numero) ----  

console.log(); */