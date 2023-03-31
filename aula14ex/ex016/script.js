function contar(){
    var num = document.getElementsByName('elemento')
    var res = document.getElementById('res')
    if (num[0].value.lenght == 0 || num[1].value.lenght == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando... '
        let i = Number(num[0].value)
        let f = Number(num[1].value)
        let p = Number(num[2].value)
        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i <= f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
