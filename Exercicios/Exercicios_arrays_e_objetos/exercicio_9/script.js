// Criar uma variavel com uma frase, depois transformar em um array e imprimir no console cada palavra.

let frase = "Eu vou conseguir um emprego ate setembro";

let fraseArr = frase.split(" ");

console.log(fraseArr);

function imprimirArr(arr) {
    console.log(arr);

}

fraseArr.forEach(imprimirArr);


