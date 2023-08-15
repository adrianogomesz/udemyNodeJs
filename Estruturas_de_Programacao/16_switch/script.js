// parecido com o if/else porém menos utilizado, a preferencia é utilizar o if/else


let nome = "Adriano";


switch(nome) {
    case "Adriano":
        console.log("O nome está correto.");
        break;
    case "Matheus":
        console.log("Não é o Adriano.");
        break;
    default:
        console.log("Esse nome não existe.");
        break;        
}