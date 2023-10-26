// setTimeout(() => {
//     alert('Olá, mundo!')
// }, 2000);


// setInterval(() => {
//     console.log('Console dentro do setTimeout')
// }, 2000);


let idDoIntervalo = setInterval(() => {
                        console.log('Executando a cada 2 segundos')    
                    }, 2000);



clearInterval(idDoIntervalo)