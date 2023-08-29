// Get serve para retornar o valor de uma propriedade do objeto enquanto Set serve para adicionar o valor a uma propriedade que não foi definida.

class Cachorro {
    constructor(raca, cor, nome) {
        this.raca = raca;
        this.cor = cor;
        this.nome = nome;
    };

    get getCor() {
        return this.cor;
    };

    set setCor(cor) {
        this.cor = cor;
    };
};


let faisca = new Cachorro ("Vira Lata", "Sem Cor", "Faisca");

console.log(faisca);

faisca.setCor = "Caramelo";

console.log(faisca.getCor);
