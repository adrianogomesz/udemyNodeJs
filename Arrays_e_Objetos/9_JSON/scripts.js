// JavaScript Object Notation ou JSON é um tipo de dado igual ao objeto porém não aceita metodos de consulta nem comentários e segue um padrão rigoroso.

let pessoaJSON = {
    "nome": "Adriano",
    "idade": 22,
    "profissao": "estudante",
    "emprego": false

};

console.log(pessoaJSON);


// Podemos converter JSON para string e vice versa utilizando os metodos JSON.stringfy e JSON.parse

let pessoaString = JSON.stringify(pessoaJSON);

console.log(pessoaString);

let pessoa2JSON = JSON.parse(pessoaString);

console.log(pessoa2JSON);
