// Serve para identificar se um objeto é instância de outro, herança de outro, etc.

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

console.log(Lobo instanceof Mamifero);

console.log(new Lobo instanceof Mamifero);

console.log(loboCinza instanceof Lobo);

console.log(loboCinza instanceof Mamifero);