let promessa = Promise.resolve(new Error("Erro"));

console.log(promessa);

promessa.then((value) => {console.log(value)});
promessa.catch((reason) => {console.log(reason)});