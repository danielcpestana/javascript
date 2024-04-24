// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,

        // Getter
         get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');

        },

        fala(assunto = 'Estudando'){
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
        
    }
};

const p1 = criaPessoa('Daniel', 'Pestana', 1.85, 200)
const p2 = criaPessoa('Luiz', 'Otávio', 1.85, 80)
const p3 = criaPessoa('Rodrigo', 'Rodrigues', 1.85, 90)

console.log(p1.imc)
console.log(p2.fala())
console.log(p3.imc)
