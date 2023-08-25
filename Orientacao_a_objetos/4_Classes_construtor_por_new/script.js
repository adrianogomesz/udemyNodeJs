// Outra das formas de instanciar um objeto a uma classe é usando o NEW como construtor. Instanciar = criar um novo objeto. OBS: nome da classe inicia com MAIUSCULO

function Pessoa (nome, idade, profissao){
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;

}

let pessoa1 = new Pessoa("Adriano", 22, "Desenvolvedor de Softwares");

console.log(pessoa1);