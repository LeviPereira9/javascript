var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)


if(hora < 6) {
    console.log(`Olha a hora! Você não deveria estar dormindo?`)
}
else if(hora < 12) {
    console.log(`Bom dia!`)
}
else if(hora < 18) {
    console.log(`Boa tarde!`)
}
else if (hora < 23 ) {
    console.log(`Boa noite!`)
}
else {
    console.log(`Insira um horário valido.`)
}

/* var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
} */