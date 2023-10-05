// praticamente igual ao keyup e keydown, o mousedown nao ocorre de executar infinitas vezes ao ser pressionado
// alem disso existe tambem o clique duplo chamado de dblclick

let btn1 = document.getElementById("btn1");

let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function () {
    console.log("Clicou");
});

btn1.addEventListener("mouseup", function () {
    console.log("Soltou");
});


// clique duplo:

btn2.addEventListener("dblclick", () => {
    console.log("Clicou duas vezes");
});


// podemos pegar o clique direito fazendo uma pequena gambiarra: o clique direito tem como evento default abrir o context meno, entao paramos esse evento com o preventDefault e 
// adicionamos o evento que queremos.

window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    console.log("Clique direito");
});
