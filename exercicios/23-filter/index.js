let pessoas = [
    {nome: 'Daniel', idade: 22},
    {nome: 'Roberto', idade: 33},
    {nome: 'Junior', idade: 35}
]

let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa){
    return pessoa.idade === 33
})

console.log(pessoasComIdadeDe33Anos)