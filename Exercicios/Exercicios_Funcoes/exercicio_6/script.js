// Escreva uma função que detecta o tipo de dado passado (number, boolean, string) e retorne uma mensagem para cada tipo.


function verificarDado(dado) {
    if (typeof dado === 'string') {
        console.log(`${dado} é uma string!`);

    } else if (typeof dado === 'number') {
        console.log(`${dado} é um number!`);

    } else if (typeof dado === 'boolean') {
        console.log(`${dado} é um boolean!`);

    } else {
        console.log("Dado não identificado!");

    }

}

verificarDado(15);
verificarDado("Hello World");
verificarDado(true);
