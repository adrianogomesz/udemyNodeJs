function multiplicarNumeros(x, y, z) {
    return x * y * z;

}

console.log(multiplicarNumeros(2, 16, 3));


function verificarHabilitacao(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Habilitado!");

    } else {
        console.log("Não habilitado!");
    }
}

console.log(verificarHabilitacao(15, 0));
console.log(verificarHabilitacao(18, false));
console.log(verificarHabilitacao(22, 1));
console.log(verificarHabilitacao(42,true))