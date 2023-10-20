function alterarCorDeFundoPrimeiroPost(){
    let posts = document.getElementsByClassName('post');
    let PrimeiroPost = posts[0]
    PrimeiroPost.style.backgroundColor = 'red';
}


function alterarTamanhoSegundoPost(){
    let textoPosts = document.getElementsByClassName('texto-post')
    textoPosts[1].classList.add('fonte-grande')
}


function marcarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino')
    let radioFeminino = document.getElementById('genero-feminino')

    if(genero === 'M'){
        radioMasculino.checked = true
    } else if (genero === 'F'){
        radioFeminino.checked = true
    }

}