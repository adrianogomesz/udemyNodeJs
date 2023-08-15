// Uma função que retorna a si mesma, utilizado como se fosse um loop, porém apenas em situações necessárias ou especificas pois pode causar problemas...
//...com o excesso de vezes que a função se reutilizar.


function numeroPar(x) {
    if (x < 2) {
        console.log("A recursão parou!");

    } else if (x % 2 == 0) {
        console.log(`O número ${x} é par!`);
        numeroPar(x - 2);

    } else {
        console.log(`O número ${x} é ímpar!`);
        numeroPar(x - 1);
    }
}


console.log(numeroPar(34));
console.log(numeroPar(12));
console.log(numeroPar(50));
console.log(numeroPar(13));