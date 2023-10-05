// os eventos de teclas sao diferentes dos eventos atrelados por elementos, devemos atrelar os eventos de tecla ao objeto window que seria a janela do nosso navegador.
// keyup = quando soltamos a tecla.
// keydown = quando apertamos a tecla.

window.addEventListener("keydown", (e) => {
    if (e.key == "a") {
        console.log("Apertou o A")
    } 
    else if (e.key == "Enter") {
        console.log("Apertou o Enter")
    };
})

// as vezes usar o evento no keydown pode nao ser a melhor forma pois ao pressionar e segurar a tecla, o evento sera executado infinitas vezes, ja com o keyup sera executado apenas
// quando soltar a tecla.