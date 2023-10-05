// eventos no scroll do mouse sao usados em animacao, quando a barra de rolagem chega a um certo ponto da pagina, para isso eh necessario que a pagina tenha um tamanho.

window.addEventListener("scroll", (e) => {

    if(window.pageYOffset > 1000) {

        console.log("ativou");
    };
});
