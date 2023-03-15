let lista = [1,2,3,7,4]
function soma(n){
    let soma = 0
    for(let c = 0; c < n.length; c++){
        soma += n[c]
    }
    return soma
}
let item = soma(lista)
console.log(item)