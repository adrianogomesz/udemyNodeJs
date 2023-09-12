async function soma(a,b) {
    return a + b;

};

console.log(soma(5,3));

soma(3,1).then((value) => {console.log(value)});