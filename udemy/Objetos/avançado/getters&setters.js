function Produto(nome, preco, estoque) {  
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true,
        get: function (){
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== ('number')) {
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor

        }
    });

   

}

function criaPessoa(nome){
    return {
        get nome() {
            return nome;
        },
        set nome (valor) {

            valor = valor.replace('ilo', '')
            nome = valor;
        }
    }
}


const p1 = criaPessoa('Daniel')
p1.nome = 'Danilo'
console.log(p1.nome)