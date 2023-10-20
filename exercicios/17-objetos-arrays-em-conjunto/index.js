// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [
//         {nome: 'Final fantasy'},
//         {nome: 'Fallout'}

//     ]
// }
// let jogo3 = {

//     nome: 'league of legends'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame)

let cliente = {
    nome: 'Ricardo',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {nome: 'Fifa'}
        ]

    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)