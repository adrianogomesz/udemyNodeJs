// eventos de foco geralmente sao utilizados em formularios para dar foco onde deve ser preenchido, utilizamos os eventos focus e blur para dar foco e sair do foco.


let input = document.getElementById('input1');

input.addEventListener("focus", () => {

    console.log("Focou");

});

input.addEventListener("blur", () => {

    console.log("Desfocou");

});