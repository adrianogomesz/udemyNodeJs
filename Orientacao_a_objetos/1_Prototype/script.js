// Prototype funciona como um conceito de hierarquia, o prototype é pai de um objeto menor criado a partir dele, caso criado do zero ele é filho do objeto Object que é o pai dos objetos.
// Os objetos criados herdam os metodos e propriedades do objeto prototype.

let pessoa = {
    maos: "2",

}

console.log(Object.getPrototypeOf(pessoa));


let novaPessoa = Object.create (pessoa);

console.log(novaPessoa.maos);

console.log(Object.getPrototypeOf(novaPessoa) === pessoa);