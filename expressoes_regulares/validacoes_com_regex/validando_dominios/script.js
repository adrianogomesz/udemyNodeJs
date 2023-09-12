const validarDominio = /\www.\w+[.com.br|.com]/;

console.log(validarDominio.test("www.google.com.br"));

console.log(validarDominio.test("www.facebook.com"));

console.log(validarDominio.test("google.com"));