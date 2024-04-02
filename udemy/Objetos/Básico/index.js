const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()












//function criaPeassoa(nome, sobrenome, idade){
//    return {nome, sobrenome, idade}
//}

//const pessoa1 = criaPeassoa('Daniel', 'Pestana', 23)
//const pessoa2 = criaPeassoa('Ricardo', 'Junior', 30)

//console.log(pessoa1.nome, pessoa2.idade)