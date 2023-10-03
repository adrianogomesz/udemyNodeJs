// devemos atrelar o evento à algum elemento html ou elemento ja criado pelo js, depois selecionar qual sera o listener e atribuir uma funcao ao evento.


let btn = document.getElementById('btn1');

btn.addEventListener("click", () => {
    alert("Funcionou!");
})