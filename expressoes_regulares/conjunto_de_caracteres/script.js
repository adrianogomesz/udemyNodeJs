// Nota: Tomar cuidado pois a regex leva em consideracao o padrao de numeros e nao o seu valor.

const regex1 = /[12345]/;

const regex2 = /[0-9]/;


console.log(regex1.test("60"));

console.log(regex1.test("24"));

console.log(regex2.test("5235235"));