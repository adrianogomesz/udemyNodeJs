// eventos que executam algo ao carregar a pagina ou ao tentar sair dela, sao usados para nao perder dados preenchidos caso feche a pagina sem querer ou para aceitar algum termo 
// de uso do site.

window.addEventListener("load", () => {

    alert("Hello World");

});

window.addEventListener("beforeunload", function (e) {

    e.preventDefault() //eh necessario usar o preventDefault para funcionar

});