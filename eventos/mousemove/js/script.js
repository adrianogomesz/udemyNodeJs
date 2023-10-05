// podemos captar a posicao do mouser na tela utilizando o evento mousemove atrelado ao objeto window que seria a janela do navegador.

window.addEventListener("mousemove", (e) => {

    console.log(e.x);
    console.log(e.y);
})
