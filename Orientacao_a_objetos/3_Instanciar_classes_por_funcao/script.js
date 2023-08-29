// Uma das formas de instanciar um objeto a uma classe é usando uma função como construtor. Instanciar = criar um novo objeto.

function criarPessoa (nome, idade, profissao){
    let pessoa = Object.create({});
    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.profissao = profissao;
    return pessoa;

}

let pessoa1 = criarPessoa("Adriano", 22, "Desenvolvedor de Softwares");

console.log(pessoa1);