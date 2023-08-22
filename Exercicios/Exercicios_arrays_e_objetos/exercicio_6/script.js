// Criar dois arrays e uma função que verifique a quantidade de elementos desses arrays.

let nomes = ["Adriano", "Gabriel", "Adriana", "Maria", "Faísca", "Major RD"];

let numeros = [1, 3, 5];

function verificarQuantidade(arr) {
    if(arr.length <= 5) {
        console.log("Poucos elementos");

    }

    else {
        console.log("Muitos elementos");

    }
}

verificarQuantidade(nomes);

verificarQuantidade(numeros);