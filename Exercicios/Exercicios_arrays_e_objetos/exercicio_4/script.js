// Adicionar uma propriedade e imprimir no console, deletar uma propriedade.

let pessoa = {
    nome: "Adriano Xavier Gomes",
    idade: 22,
    profissao: "Desenvolvedor de Software",
    endereco: "Rua Eraldo Silva Dias",

};

console.log(pessoa);

pessoa.fumante = true;

delete pessoa.endereco;

console.log(pessoa.fumante);

console.log(pessoa);


