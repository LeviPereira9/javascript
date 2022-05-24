function multiplicar() {
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('tabu')


    if(num.value.length == 0) {
        alert('Digite um número valido!')
    } else {
        var numb = Number(num.value)
        var c = 1

        tab.innerHTML=''
        while(c <= 10){
            var item = window.document.createElement('option')
            item.text = `${numb} x ${c} = ${numb*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }


    }

}