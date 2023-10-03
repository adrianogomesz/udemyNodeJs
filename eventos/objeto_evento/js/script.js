// quando criamos um evento, o js cria automaticamente um objeto do evento com propriedades que podemos utilizar, para verificar essas propriedades, basta utilizar um argumento
// opcional na funcao do evento, que pode ser "e" ou "event" ou qualquer outro, e ele nos retornara o objeto do jeito que programamos.

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');


function alerta (e) {
    console.log(e);
};

btn1.addEventListener("click", alerta);


btn2.addEventListener("click", function(evento) {
    console.log(evento);
});