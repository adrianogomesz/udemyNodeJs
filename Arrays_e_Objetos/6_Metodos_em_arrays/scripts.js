//Metodos push e pop servem para adicionar e remover um elemento do array, se atribuido a uma variavel o pop ainda nos retorna o elemento removido. Os dois metodos sempre removem 
//e adicionam ao ultimo elemento do array.
let nomes = ["Adriano", "Gabriel", "Adriana", "Maria"];

let nomeRemovido = nomes.pop();

console.log(nomeRemovido);

console.log(nomes);

nomes.push('Guiomar');

console.log(nomes);


//Metodos shift e unshift servem da mesma forma que push e pop, porém adicionam e removem os primeiros elementos do array.
let primeiroNomeRemovido = nomes.shift();

console.log(primeiroNomeRemovido);

console.log(nomes);


nomes.unshift('Gomes');

console.log(nomes);


//Metodos indexOf e lastIndexOf servem para encontrar o indice de um elemento, indexOf retorna o indice da primeira vez que o elemento aparece, enquanto lastIndexOf da ultima vez.
let numeros = [2, 5, 1, 7, 8, 5];


//retorna 1 pois o primeiro elemento 5 está no indice 1.
console.log(numeros.indexOf(5)); 


//retorna 5 pois o ultimo elemento 5 está no ultimo indice do array que contém 5 elementos.
console.log(numeros.lastIndexOf(5)); 


//Metodo slice serve para criar um novo array apartir de um array existente, retornando o array conforme os parametros passados.
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//o primeiro parametro é o indice do primeiro elemento que retornará, o segundo parametro é o indice final do array. Obs: o segundo parametro retorna o indice -1.
console.log(nums.slice(7,8)); 


//caso não for passado o parametro do indice final, o metodo retornará o array inteiro desde o primeiro parametro passado.
console.log(nums.slice(3)); 


//também é possivel retornar os ultimos elementos do array utilizando números negativos.
console.log(nums.slice(-3)); 


//da mesma forma é possivel excluir os ultimos numeros passando o parametro do indice final com números negativos.
console.log(nums.slice(2, -4)); 


//Metodo forEach serve para executar uma função para cada item do array.
let carros = ["Cruze", "i30", "Vectra", "Golf", "Onix"];

function imprimirCarros(carro) {
    console.log(carro);

};

carros.forEach(imprimirCarros);


//Metodo includes serve para verificar se um elemento existe dentro do array, retorna um valor boolean.

//retornará true pois o elemento existe no array.
console.log(carros.includes("Cruze"));

//retornará false pois o elemento não existe no array.
console.log(carros.includes("Virtus"));


// Metodo reverse serve para inverter os elementos de um array, serve para qualquer tipo de dado.

console.log(carros.reverse());

console.log(nums.reverse());