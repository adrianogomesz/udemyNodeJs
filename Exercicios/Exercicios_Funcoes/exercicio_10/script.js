// Escreva uma função que receba um número e o decrementa de 1 em 1, além disso imprima somente os números pares.


function contador (x) {
    let cont = x
    let meuContador = function (y) {
        cont--;
        if (cont % 2 == 0) {
            console.log(cont);

        } else {
            console.log("Não é um número par!");

        }

    }
    return meuContador;

}

let contadorUm = contador(20);

contadorUm();
contadorUm();
contadorUm();
contadorUm();
contadorUm();
contadorUm();
contadorUm();
contadorUm();
contadorUm();
contadorUm();
