// propriedades offsetWidth e offsetHeight para verificar altura e largura de um elemento considerando as bordas.

let qualquerElemento = document.querySelector('#titulo-principal');

console.log(qualquerElemento.offsetWidth);
console.log(qualquerElemento.offsetHeight);


// metodos clientWidth e clientHeight para verificar altura e largura de um elemento desconsiderando as bordas.

console.log(qualquerElemento.clientWidth);
console.log(qualquerElemento.clientHeight);


// metodo getBoudingClientRect() nos retorna as posicoes top, left, right e bottom do elemento.


console.log(qualquerElemento.getBoundingClientRect());