document.getElementById('formSalario').addEventListener('submit', function(event){
    event.preventDefault()

    var salario = parseFloat(document.getElementById('salario').value)

    var valores = JSON.parse(localStorage.getItem('valores'))||[0,0,0]

    valores[0] = valores[0]+salario//define o saldo disponivel

    localStorage.setItem('valores', JSON.stringify(valores))

    mostrarValores()
})
document.getElementById('formDespesas').addEventListener('submit',function(event){
    event.preventDefault()

    //adicionando uma despesa na lista

    var valor = parseFloat(document.getElementById('valor').value)
    var nome = document.getElementById('nome').value
    var data = (document.getElementById('data').value).split('-')

    data = data[2]+"-"+data[1]+"-"+data[0]

    despesa = {valor:valor,nome:nome,data:data}
    
    var despesas = JSON.parse(localStorage.getItem('despesas'))||[]
    despesas.push(despesa)
    
    localStorage.setItem('despesas',JSON.stringify(despesas))
    
    //atualizando o total de despesas
    
    var valores = JSON.parse(localStorage.getItem('valores'))||[0,0,0]
    
    valores[1] = valores[1]+valor
    
    
    //atualizando o saldo total
    
    valores[2] = valores[0]-valores[1]

    alert(valores[2])
    
    
    localStorage.setItem('valores',JSON.stringify(valores))
})

function mostrarValores(){

}

document.getElementById('btnClear').addEventListener('click',function(event){
    //limpa os arquivos json(usar apenas durante o desenvolvimento)

    confirmacao = confirm('Está ação ira apagar todos os dados salvos dentro do localStorage. Tem certeza desta ação?')
    
    if(confirmacao){

        localStorage.removeItem('valores')
        localStorage.removeItem('despesas')
    }
    mostrarValores()
})