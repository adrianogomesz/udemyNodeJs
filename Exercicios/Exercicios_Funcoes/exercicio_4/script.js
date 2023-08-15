// Escreva uma função que retorne um número aleatório. O número máximo deve ser passado por parâmetro.


function numeroAleatorio(numero) {
    return Math.floor(Math.random() * numero) + 1;

}


console.log(numeroAleatorio(100));
console.log(numeroAleatorio(10));
