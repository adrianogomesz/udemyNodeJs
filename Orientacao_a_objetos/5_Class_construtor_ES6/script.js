// Construtor de classes do próprio javascript atualizado na ES6, só aceita incluir metodos direto no constructor, para incluir propriedades é preciso incluir com o prototype.
// Prototype serve para adicionar propriedades e metodos nas classes.

class Cachorro {
    constructor(raca, cor, nome) {
        this.raca = raca;
        this.cor = cor;
        this.nome = nome;
    };

    latir() {
        console.log("Au Au");
    };
};

Cachorro.prototype.patas = 4;

let faisca = new Cachorro("Vira lata", "Caramelo", "Faisca");

console.log(faisca);

console.log(faisca.patas);

faisca.latir();