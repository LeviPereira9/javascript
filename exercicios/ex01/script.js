function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML=`Agora são ${hora} horas.`

    if (hora<12) {
        //Bom dia
        img.src = 'imagens/manhã.jpg'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = 'rgb(226, 228, 150)'
    } else {
        //Boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor ='rgb(14, 30, 77)'
    }

}



