// Desafio da conta bancaria:

class ContaBancaria {
    constructor (numeroConta, saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        
    }
    
    depositar (valor) {
        this.saldo = this.saldo + valor;
        
    }
    
    sacar (valor) {
        if (this.saldo >= valor) {
            let saque = valor
            this.saldo -= valor
            console.log(saque);
        }
        
        else {
            console.log("Saldo Insuficiente!");
            
        }
    }
    
    consultarSaldo() {
        console.log(this.saldo);
        
    }
}

let conta1 = new ContaBancaria(111, 3000);

conta1.depositar(200);

conta1.consultarSaldo();

console.log(conta1);

conta1.sacar(500);

conta1.consultarSaldo();