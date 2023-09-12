let promessa = Promise.resolve(5);

console.log(promessa);

promessa.then((value) => {console.log(5 + value)});