var numero = window.document.getElementById("numero")
var caixa = window.document.getElementById("caixa")
var msg = window.document.getElementById("msg")
var valores = []

function add() {

    if (numero.value.length == 0){
        window.alert('Por favor, preencha os campos corretamente!')

    } else {
        var n = Number(numero.value)

        if (n <= 0 || n > 100) {
            window.alert('Por favor, preencha os campos corretamente!')
        } else {
            valores.push(n)
            var item = window.document.createElement('option')
            item.text = `Valor ${n} adicionado`

            caixa.appendChild(item)

            msg.innerHTML=''
        }
    }

    numero.value = ''
    numero.focus()
}

function final() {
    if (caixa.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma / tot
        
        msg.innerHTML = ''
        msg.innerHTML += `Ao todo, temos ${tot} números cadastrados <br> O maior valor informado foi ${maior} <br> O menor valor informado foi ${menor} <br> Somando todos os valores, temos ${soma} <br> A média dos números é ${media}`
    }
}