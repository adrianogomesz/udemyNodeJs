// Escreva uma função que receba uma string, se o texto conter mais de 10 caracteres, informe que o texto é longo demais, se for menos, informe ok.


function verificarTamanhoString (str) {
    if (str.length > 11) {
        console.log("Tamanho de caracteres excedido!");

    }   else {
        console.log("Tamanho de caracteres permitido!")
        console.log(str);

    }
}


verificarTamanhoString("olá mundo!");
verificarTamanhoString("oi oi");
verificarTamanhoString("Essa vai ser maior!");
