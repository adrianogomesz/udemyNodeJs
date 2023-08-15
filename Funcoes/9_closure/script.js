// Uma função que "se lembra" do ambiente que ela foi criada (escopo léxico), usada para simular metodos privados no javascript, ou seja...
//... uma função onde apenas a função que será retornada (sempre retorna uma função), terá acesso às variaveis criadas nela. *

function armazenarSoma(x) {
    return function(y) {
        return x + y
    }
    
}

let soma1 = armazenarSoma(5);

console.log(soma1(10));


let soma2= armazenarSoma(10);

console.log(soma2(2));


function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont++;

    }
    return somarContador;
}

let meuContador = contador(0);

meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();

