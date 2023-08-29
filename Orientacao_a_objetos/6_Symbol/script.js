// Serve como uma constante de um objeto, um valor de uma propriedade do objeto que não pode ser alterado.
class Cachorro {
    constructor (raca, cor, nome) {
        this.raca = raca;
        this.cor = cor;
        this.nome = nome;
    };
};


// Essa é a sintaxe da declaração:
let patas = Symbol();

Cachorro.prototype[patas] = 4;


// Para acessar:
console.log(Cachorro.prototype[patas]);
