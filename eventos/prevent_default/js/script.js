// alguns elementos ja tem algum evento atrelado a eles por padrao, chamados de eventos default, podemos parar esse evento e atribuir o evento que quisermos a esse elemento com
// o metodo preventDefault.


// ao clicarmos em um elemento link (a), por padrao ele nos leva ate a pagina referenciada, porem podemos parar isso e adicionar outro evento da noessa escolha:

let link = document.querySelector('a');

link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Nao vai redirecionar");
});