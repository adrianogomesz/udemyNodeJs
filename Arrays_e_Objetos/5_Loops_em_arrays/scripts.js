//Loops em arrays é uma técnica muito utilizada na programação para verificar os dados de um array, utilizando o for, começa declarando uma variavel indice "i", e enquanto essa 
//variavel indice for menor que o tamanho do array, incrementa-se 1 para percorrer o array.


let numeros = [1, 3, 5, 7, 9, 11, 13, 15];

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);

};


let nomes = ["Adriano", "Gabriel", "Adriana", "Maria"];

for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);

};


//Metodos push e pop servem para adicionar e remover um elemento do array, se atribuido a uma variavel o pop ainda nos retorna o elemento removido. Os dois metodos sempre removem 
//e adicionam o ultimo elemento do array.

let nomeRemovido = nomes.pop();

console.log(nomeRemovido);

console.log(nomes);

nomes.push('Guiomar');

console.log(nomes);