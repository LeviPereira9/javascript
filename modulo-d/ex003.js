var idade = 23
if (idade < 16) {
    console.log(`Você possui ${idade} anos e não pode votar. Espere ${16-idade} anos para votar.`)
}
else if(idade<18 || idade>=65){
    console.log(`Você possui ${idade} anos e seu voto é opcional.`)
}
else{
    console.log(`Você possui ${idade} anos e seu voto é obrigatorio.`)
}