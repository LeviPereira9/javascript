function enviar() {
    var msg = window.document.getElementById("msg")
    var msg1 = window.document.getElementById("sec02")
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById("i_ano").value


    if (fAno == 0 || fAno > ano) {
        window.alert("Verifique os dados e preencha novamente.")
    } else {
        var fSex = window.document.getElementsByName("genero")
        var idade = ano - fAno //calculo da idade
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute("id", "foto")
        if (fSex[0].checked) {
            var genero = 'Homem'
            if (idade <= 12) {
                //Criança
                img.setAttribute('src', 'imagens/masculino-criança.jpg')
            } else if (idade <= 24){
                //Adolescente
                img.setAttribute('src', 'imagens/masculino-adolescente.jpg')
            } else if (idade <65) {
                //Adulto
                img.setAttribute('src', 'imagens/masculino-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/masculino-idoso.jpg')
            }
        } else if (fSex[1].checked) {
            var genero = 'Mulher'
            if (idade <= 12) {
                //Criança
                img.setAttribute('src', 'imagens/feminino-criança.jpg')
            } else if (idade <= 24) {
                //Adolescente
                img.setAttribute('src', 'imagens/feminino-adolescente')
            } else if (idade < 65) {
                //Adulta
                img.setAttribute('src','imagens/feminino-adulto.jpg')
            } else {
                //Idosa
                img.setAttribute('src', 'imagens/feminino-idosa.jpg')
            }
        }
        msg.innerHTML = `Parabéns, idade ${idade} e ${genero}`
        msg1.appendChild(img)
    }
}