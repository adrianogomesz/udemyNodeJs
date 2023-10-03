// para removermos um evento, precisamos criar outro com o metodo removeEventListener, o evento que sera removido precisa ter uma funcao externa para ser passada como argumento.

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');


function alerta () {
    alert("Funcionou!");
};

btn1.addEventListener("click", alerta);


btn2.addEventListener("click", () => {
    btn1.removeEventListener("click", alerta);
});