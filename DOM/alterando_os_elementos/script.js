//insertBefore: insere um elemento novo antes de um elemento alvo.

let elementoNovo = document.createElement('p');
let texto = document.createTextNode("Novo Elemento");
elementoNovo.appendChild(texto);


let elementoAlvo = document.querySelector('#titulo-principal');
let elementoPai = document.querySelector('.container');

elementoPai.insertBefore(elementoNovo, elementoAlvo);


//appendChild: insere um elemento novo no final de todos os elementos filhos de um elemento pai selecionado.

let h2 = document.querySelector('#titulo-secundario');
let pai = h2.parentNode;

pai.appendChild(elementoNovo);


//replaceChild: substitui um elemento alvo por outro elemento novo.

let heading = document.querySelector('#titulo-principal');
let parentHeading = heading.parentNode;

parentHeading.replaceChild(elementoNovo, heading);

