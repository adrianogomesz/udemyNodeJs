// Criar um objeto calculadora com metodos somar, subtrair, multiplicar e dividir, os metodos só podem aceitar dois parametros, utilizar cada um dos metodos.

let calculadora = {
    somar: function (x, y) {
        let soma = x + y;
        let resultadoSoma = soma;
        console.log(resultadoSoma);

    },

    subtrair: function (x, y) {
        let subtrair = x - y;
        let resultadoSubtracao = subtrair;
        console.log(resultadoSubtracao);

    },

    multiplicar: function(x, y) {
        let multiplicar = x * y;
        let resultadoMultiplicacao = multiplicar;
        console.log(resultadoMultiplicacao);

    },

    dividir: function (x, y) {
        let dividir = x / y;
        let resultadoDivisao = dividir;
        console.log(resultadoDivisao);
    }
}

calculadora.somar(5, 3);

calculadora.subtrair(10, 5);

calculadora.multiplicar(2, 8);

calculadora.dividir(200, 2);
