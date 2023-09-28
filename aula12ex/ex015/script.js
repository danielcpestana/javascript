function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#edc6a8'

    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/fototard.jpg'
        document.body.style.background = '#79464b'

    }else {
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#212939'

    }
}

