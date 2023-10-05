// quando lidamos com eventos, pode ocorrer um bug chamado propagação, onde ao clicar em um elemento com evento que está dentro de outro elemento, os dois sejam ativados.
// para corrigir isso, usamos o metodo stopPropagation no elemento que queremos corrigir.


let btn1 = document.getElementById('btn1');
let paragrafo = document.querySelector('p');

paragrafo.addEventListener("click", () => {
    alert("Duplicou!");
});

btn1.addEventListener("click", () => {
    console.log("Funcionou!");
    event.stopPropagation();
});