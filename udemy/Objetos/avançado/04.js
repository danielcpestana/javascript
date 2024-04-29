// Construtora -> molde (classe)
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'O.') // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.') // <- Pessoa = Função construtora
const data = new Date();

console.log(pessoa1.nomeCompleto())