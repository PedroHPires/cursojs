function carregar() {
    var msg = document.getElementById('msg')
    var mensagem = document.getElementById('msg2')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    let body = document.getElementsByTagName('body')[0]
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 5 && hora < 13){
        imagem.src = 'imagens/hora-manha.png'
        body.style.backgroundColor = '#F2C36B'
        mensagem.innerHTML = 'Bom Dia!'
    }else if (hora >=13 && hora < 18) {
        imagem.src = 'imagens/hora-tarde.png'
        body.style.backgroundColor = '#D98162'
        mensagem.innerHTML = 'Boa Tarde!'
    }else if(hora >=18 && hora < 24) {
        imagem.src = 'imagens/hora-noite.png'
        body.style.backgroundColor = '#246473'
        mensagem.innerHTML = 'Boa Noite!'
    }else {
        imagem.src = 'imagens/hora-madrugada.png'
        body.style.backgroundColor = '#010326'
        mensagem.innerHTML = 'Boa Madrugada!'        
    }
}