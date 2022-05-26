function parimpar(n) {
    if (n%2==0) {
        return 'Par'
    }else{
        return 'Impar'
    }
}

let n = Number(4)
let res = parimpar(n)
console.log(res)