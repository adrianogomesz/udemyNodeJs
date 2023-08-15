//Metodo trim serve para remover tudo que não for string.

let nome = "      Adriano  ";

console.log(nome);


let nomeCorrigido = nome.trim();

console.log(nomeCorrigido);


/*Metodo padStart serve para padronizar o tamanho de uma string, exemplo real: o id de um produto foi cadastrado em um sistema com apenas 2 caracteres, porém o sistema aceita somente 
um padrão de 6 caracteres */

let idProduto = "55";

//o primeiro parametro é o tamanho desejado para a string, e o segundo parametro é o que vai preencher os espaços em branco.
let padronizarIdProduto = idProduto.padStart(6, "0");

console.log(padronizarIdProduto);


//Metodo split serve para dividir uma string com um separador e retornar um array dessa string. O separador é indiferente, qualquer string passada no parametro serve como separador.

let frase = "Ola;eu;sou;o;Adriano;Gomes";

let palavras = frase.split(";");

console.log(palavras);


//Metodo join serve da mesma forma que o split, porém ao contrário, ele transforma um array em uma string novamente.

let novaFrase = palavras.join(" ");

console.log(novaFrase);


//Metodo repeat serve para repetir a string quantas vezes forem passadas no parametro (number).

let palavra = "Xicara ";

console.log(palavra.repeat(20));

let saudacao = "Hello World! ";

console.log(saudacao.repeat(5));