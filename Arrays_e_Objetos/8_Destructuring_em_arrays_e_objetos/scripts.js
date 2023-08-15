// É uma expressão para pegar dados de um objeto ou array e transforma-los em variaveis.

let produto = {
    cor: "vermelho",
    tipo: "solido",
    quantidade: 22,
    disponivel: true,
};

// essa é a sintaxe da expressão 'const(ou let) {} = objeto;'


let {cor: variavelCor, tipo: variavelTipo, quantidade: variavelQuantidade, disponivel: variavelDisponivel} = produto;

console.log(variavelCor);

console.log(variavelTipo);

console.log(variavelQuantidade);

console.log(variavelDisponivel);


// funciona com arrays também e a ordem das variaveis segue a ordem do array. sintaxe da expressão 'let [num1, num2, num3, num4] = numeros;' 

let numeros = [1, 2, 3, 4];

let [num1, num2, num3, num4] = numeros;


console.log(num1);

console.log(num2);

console.log(num3);

console.log(num4);