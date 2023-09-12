function* geradorId () {
    let id = 0;
    while(true) {
        yield id++;
    }
}

let criarId = geradorId();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
