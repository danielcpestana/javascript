let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Raphael', idade: 27}
]

let nomes = pessoas.map(function(pessoa){
    return pessoa.nome + " tem " + pessoa.idade + " anos "
})

console.log(nomes)