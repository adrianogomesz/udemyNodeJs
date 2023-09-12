const validarDataDeNascimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDataDeNascimento.test("22/0896"));
console.log(validarDataDeNascimento.test("18/02/74"));
console.log(validarDataDeNascimento.test("10/03/2001"));
