// Superclass

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function(){
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );

};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
    
}

ContaP.prototype = Object.create(Conta.prototype);
ContaP.prototype.constructor = ContaP


const contacorrente = new ContaCorrente(11, 22, 0 , 100);
contacorrente.depositar(10)
contacorrente.sacar(110 )
contacorrente.sacar(1)

console.log()

const contap = new ContaP(11, 33, 0 );
contap.depositar(10)
contap.sacar(10 )
contap.sacar(1)