// Podemos definir um argumento padrão (default) para uma função, para que, caso não seja passado nenhum argumento, a função utilizará o argumento...
// ...default

function potencia(base, exp=2) {
    return Math.pow(base, exp);

}


console.log(potencia(2));
console.log(potencia(2,2));
console.log(potencia(2,6));
