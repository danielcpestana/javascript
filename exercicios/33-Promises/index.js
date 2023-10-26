/*
    Pendente
    Realizada
    Recusada
    Estabelecida

*/

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver água')
            resolve()
        }else {
            console.log('é necessário lgiar o fogão e colocar a chaleira no fogão para ferver a água')
            reject()
        }
    }
        )
    
}


let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')