function somar() {
    var msg = window.document.getElementById("msg")
    var n1 = window.document.getElementById("inicio")
    var inicio = Number(n1.value)
    var n2 = window.document.getElementById("fim")
    var fim = Number(n2.value)
    var n3 = window.document.getElementById("passo")
    var passo = Number(n3.value)
    
    
    if (inicio == '' || fim.length == 0) {
        window.alert(`Por favor, insira valores válidos.`)
        msg.innerHTML = `Impossível contar.`
    } else if (passo == 0 ){
        var passo = 1 //Mesmo se não colocar nada, vai ser 1
        msg.innerHTML = `Contando... <br>`
        if (inicio <= fim) {//Crescente
            while (inicio <= fim) {
                msg.innerHTML += `\u{1f449} ${inicio} `
                inicio+= passo
            }
        } else {
            while (inicio >= fim) {//Decrescente
                msg.innerHTML += `\u{1f449} ${inicio} `
                inicio-= passo
            }
        }
        msg.innerHTML += `\u{1F3C1}` //Banderinha no final da contagem.
    } else { //Repeti...
        msg.innerHTML = `Contando... <br> `
        if (inicio < fim) {//Crescente
            while (inicio <= fim) {
                msg.innerHTML += `\u{1f449} ${inicio} `
                inicio+= passo
            }
        } else {
            while (inicio >= fim) {//Decrescente
                msg.innerHTML += `\u{1f449} ${inicio} `
                inicio-= passo
            }
        }
        msg.innerHTML += `\u{1F3C1}` //Banderinha no final da contagem.
    }



}
