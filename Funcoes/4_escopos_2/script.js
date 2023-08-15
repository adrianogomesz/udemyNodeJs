// Com a chegada do let no javascript, as variaveis deixaram de ser variaveis globais e passaram a depender do escopo do código, funciona da mesma...
//...maneira do que uma variavel dentro de uma função.


let x = 10

if (x > 5) {
    let x = 20;
    
    console.log(x);
}

console.log(x);