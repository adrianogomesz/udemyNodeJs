// Classes funcionam como um molde para a criação de um objeto, definem quais serão as caracteristicas mas não preenchem as propriedades do objeto.

let cachorro = {
    raca: "SRD",
    patas: 4,
    latir: function () {
        console.log("Au Au");
    }
}

let faisca = Object.create(cachorro);

faisca.raca = "Vira Lata";

console.log(faisca.raca);

console.log(cachorro.raca);

faisca.latir();