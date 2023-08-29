// Uma classe pode herdar propriedades de outra classe pai atraves da herança utilizando a palavra reservada extends.
// Utilizamos a palavra reservada super para mudar atributos que foram herdados da classe pai.

class Mamifero {
    constructor(especie, genero, patas) {
        this.especie = especie;
        this.genero = genero;
        this.patas = patas;
    };
};

class Lobo extends Mamifero {
    constructor(especie, genero, patas, raca, cor) {
        super(especie, genero, patas);
        this.raca = raca;
        this.cor = cor;
    };
};

let loboCinza = new Lobo("Canis Lupus", "Macho", 4, "Lobo Cinzento", "Cinza");

console.log(loboCinza);