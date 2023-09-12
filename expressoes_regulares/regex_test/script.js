// Sintaxe para criar expressoes regulares


// Instanciando por objeto:
const regex1 = new RegExp("Padrao");


// Em uma variavel:
const regex2 = /Padrao/;


// Utilizacao:
let padrao = "Tem o Padrao";

console.log(regex1.test("Tem o Padrao"));

console.log(regex1.test("Nao tem"));

console.log(regex1.test(padrao));


// Utilizacao na propria expressao:
console.log(/Padrao/.test(padrao));
