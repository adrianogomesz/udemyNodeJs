// uma forma de debounce para que um evento nao seja repetido milhares de vezes em pouco tempo, eh com o uso do evento dentro de um settimeout

let timeout;

window.addEventListener("mousemove", function(e) {
    clearTimeout
    timeout = setTimeout(function() {
        console.log(e.x);
    }, 1000)
    
})