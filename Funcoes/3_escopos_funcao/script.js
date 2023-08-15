// A estrutura de código de uma função, pertence somente a função, sendo assim, o que estiver declarado nela não afetara o restante do código...
//...isso nos permite que duas variaveis sejam criadas com o mesmo nome porém valores diferentes, sendo uma dessas variaves dentro da função.


let x = 15;

function imprimir() {
    let x = 255;

    console.log(x);

}

imprimir();
console.log(x);