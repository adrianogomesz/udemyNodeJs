//Objetos são estruturas de dados que podem conter propriedades e metodos. Um objeto é estruturado da seguinte forma: chave (nome da propriedade) : valor (valor da propriedade).
// [] array, {} objetos

let eu = {
    nome: 'Adriano',
    profissao: 'Programador',
    saudacao: function () {
        console.log('Hello World!');
    }
};

console.log(eu.nome);

console.log(eu.profissao);

eu.saudacao();


//Podemos adicionar e deletar propriedades de um objeto, usando "delete" e atribuindo uma nova propriedade com valor a um objeto.

delete eu.profissao;

console.log(eu.profissao);

eu.solteiro = true;

console.log(eu.solteiro);


//Object.assign = serve para copiar as propriedades de um objeto para outro.

let euDados = {
    elo: "Esmeralda",
    faculdade: "ADS",
    bebida: "Café"
}

Object.assign(eu, euDados); //O primeiro objeto no argumento herda as informações do segundo objeto.

console.log(eu);


//Object.keys = serve para verificar as chaves de um objeto, melhor para usar quando for manipular os dados de um objeto pois retorna um array.

let mouse = {
    dpi: 1600,
    marca: "Redragon",
    rgb: true

};

console.log(mouse);
console.log(Object.keys(mouse));


//Mutação = podemos criar um novo objeto identico a algum outro, criando um vinculo de referência, qualquer alteração feita em qualquer um dos dois objetos mudará o outro também.

let pessoa = {
    nome: "Adriano"

};

let pessoa2 = pessoa;

console.log(pessoa2.nome);

console.log(pessoa == pessoa2);