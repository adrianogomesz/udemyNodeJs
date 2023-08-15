// Funciona da mesma forma que os anteriores porém agora com mais variaveis dentro de mais escopos.

let x = 10

function multiplicar(a, b) {
    
    let x = a * b;

    console.log(x);

}

if (x == 10) {
    let x = 50;

    console.log(x);

}

console.log(x);

multiplicar(3, 6);