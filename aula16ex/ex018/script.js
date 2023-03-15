var res = document.getElementById('res')
var lista = []
var txtn = document.getElementById('txtn')
var tab = document.getElementById('tab')
function adicionar(){
    var num = Number(txtn.value)
    if(num < 1 || num > 100 || lista.indexOf(num) != -1){
        alert(`Valor inválido ou já encontrado na lista`)
        txtn.value = ''
    }else {
        lista.push(num)
        let item = document.createElement('option')
        item.text = `O valor ${num} adicionado`
        tab.appendChild(item)
        txtn.value = ''
        res.innerHTML = ''
    }
}
function analisar(){
    if(lista.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        lista.sort()
        res.innerHTML = `
        <p> Ao todo temos ${lista.length} números cadastrados</p>
        <p> O maior valor informado foi ${lista[lista.length - 1]}</p>
        <p> O menor valor informado foi ${lista[0]} </p>
        <p> A soma de todos os valores é ${soma(lista)}</p>
        <p> A média dos valores digitados é ${soma(lista) / lista.length}
        `
    }
}
function soma(n){
    let soma = 0
    for(let c = 0; c < n.length; c++){
        soma += n[c]
    }
    return soma
}