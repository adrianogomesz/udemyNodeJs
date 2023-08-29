// Desafio da reserva de voo:

class Voo {
    constructor(codigoVoo, origem, destino, assentos) {
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentos = assentos;

    }

    reservarAssento() {
        if (this.assentos > 0) {
            console.log("Seu assento foi reservado com sucesso!");
            this.assentos--
        }
        
        else {
            console.log("Nao ha assentos disponiveis nesse voo.");

        }

    }

    consultarAssentosDisponiveis() {
        console.log(this.assentos);

    }
}

let vooSaoPaulo = new Voo (1, "Porto Alegre", "Sao Paulo", 5);

console.log(vooSaoPaulo);

vooSaoPaulo.consultarAssentosDisponiveis();

vooSaoPaulo.reservarAssento();

vooSaoPaulo.consultarAssentosDisponiveis();