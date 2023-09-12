function somaDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a + b);
        }, 3000);
    });
}

async function soma(a, b, c) {
    let x = somaDelay(a, b);
    let y = somaDelay(b, c);

    return await x + await y;
}

soma(1,2,3).then((value) => {console.log(value)});