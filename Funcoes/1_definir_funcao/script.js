// uma função é definida pelo comando "function" seguido de um nome dado a ela, para chamar funções ao longo do código...
// ...basta digitar o nome da função e finalizar com "()", uma função pode ser definida dentro de uma variavel.


function escreverNoConsole() {
    console.log("Hello World!");

}

escreverNoConsole();


function escreverUmNumero(num) {
    console.log("O numero é: " + num);

}

escreverUmNumero(2);
escreverUmNumero(25);
escreverUmNumero(300);


const gerarNumeroAleatorio = function() {
    console.log(Math.random());

}

gerarNumeroAleatorio();