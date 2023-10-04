let num = [5, 8, 4, 2, 9]
num.push(3)
num.sort()
console.log(num)
console.log(`Seu vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(1)
if (pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
