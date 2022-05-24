function somar() {
    var inicio = window.document.getElementById("inicio")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var msg = window.document.getElementById("msg")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        msg.innerHTML = `[ERROR] Por favor, insira valores válidos!`
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        msg.innerHTML = `Contando... <br>`

        if (p <= 0) { //Se o passo for 0, ele passa a valer 1.
            var p = 1
        }
        
        if (i<f) { //Se colocar um inicio menor que o fim, vai ser crescente
            while (i<=f) {
                msg.innerHTML += `\u{1F449} ${i} `
                i+=p
            }
        }else {
            while (i>=f) {//Se colocar um inicio maior que o fim, vai ser descrescente
                msg.innerHTML += `\u{1F449} ${i}`
                i-=p
            }
        }

        msg.innerHTML += `\u{1F3C1}`
    }
}
     
