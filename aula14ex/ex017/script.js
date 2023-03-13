function gerarTabuada(){
    num = document.getElementById('num')
    res = document.getElementById('res')
    if (num.value.length == 0){
        alert('Por favor, insira um número!')
    }else{
        res.innerHTML = ''
        let n = Number(num.value)
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            res.appendChild(item)
        }
    }
    
   

}