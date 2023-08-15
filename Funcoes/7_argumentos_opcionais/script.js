// Podemos utilizar uma função sem passar todos os parâmetros que ela pede, porém, algumas funções NECESSITAM de todos os parâmetros para funcionarem.


function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log("Essa função necessita dos dois parâmetros!");
    } else {
        return a + b;
    }
   
    
}


console.log(soma(3));
console.log(soma(3,6));