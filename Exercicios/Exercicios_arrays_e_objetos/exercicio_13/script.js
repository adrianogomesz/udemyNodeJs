// Desafio do sistema de biblioteca:

class Livro {
    constructor (titulo, autor, disponivel) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }

    emprestar () {
        if (this.disponivel == true) {
            this.disponivel = false;
            console.log("Aqui esta seu livro!");

        }

        else {
            console.log("Esse livro nao esta disponivel!");

        }
    }

    devolver () {
        if (this.disponivel == false) {
            this.disponivel = true;
            console.log("Obrigado por devolver o livro!");

        }
    }

    consultarDisponibilidade () {
        if(this.disponivel == true){
            console.log("Esse livro esta disponivel!");

        }

        else {
            console.log("Desculpe, esse livro esta indisponivel!");

        }
    }


}

let livro1 = new Livro ("O Cão dos Baskervilles", "Sir Arthur Conan Doyle", true);

let livro2 = new Livro ("Capitães da Areia", "Jorge Amado", true);

let livro3 = new Livro ("O Apanhador no Campo de Centeio", "J. D. Salinger", true);

livro1.consultarDisponibilidade();

livro1.emprestar();

livro1.consultarDisponibilidade();