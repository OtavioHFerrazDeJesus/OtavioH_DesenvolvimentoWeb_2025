document.getElementById('formSalario').addEventListener('submit', function(event){
    event.preventDefault()

    var salario = parseFloat(document.getElementById('salario').value)

    var valores = JSON.parse(localStorage.getItem('valores'))||[0,0,0]

    valores[0] = salario//define o ultimo salário adicionado

    valores[2] = valores[2]+salario//atualiza o saldo total

    localStorage.setItem('valores', JSON.stringify(valores))

    document.getElementById('formSalario').reset()

    mostrarValores()
})
document.getElementById("formDespesas").addEventListener("submit",function(event){
    event.preventDefault()

    var valor = parseFloat(document.getElementById('valor').value)
    var nome = document.getElementById('nome').value
    var data = document.getElementById('data').value.split('-')

    data = data[2]+'-'+data[1]+'-'+data[0]

    despesa = {valor:valor,nome:nome,data:data}

    var despesas = JSON.parse(localStorage.getItem("despesas"))||[]
    despesas.push(despesa)

    localStorage.setItem('despesas', JSON.stringify(despesas))

    var valores = JSON.parse(localStorage.getItem('valores'))||[0,0,0]

    valores[1] = valores[1]+valor

    valores[2] = valores[2]-valor

    localStorage.setItem('valores', JSON.stringify(valores))

    mostrarValores()


})

function mostrarValores(){
    var valores = JSON.parse(localStorage.getItem('valores'))||[0,0,0]
    var despesas = JSON.parse(localStorage.getItem('despesas'))||[]
    var ulDespesas = document.getElementById('despesas')
    var ulValores = document.getElementById('valores')
    
    for(let i=0;i<despesas.length;i++){
        let li = document.createElement('li')
        li.textContent = despesas[i].valor+" "+despesas[i].nome+" "+despesas[i].data
        ulDespesas.appendChild(li)
    }
    salario = document.createElement('li')
    salario.textContent = "Salário: "+valores[0]
    
    despesasTotais = document.createElement('li')
    despesasTotais.textContent = "Despesas Totais:"+valores[1]
    
    saldoFinal = document.createElement('li')
    saldoFinal.textContent = "Despesas Totais:"+valores[2]
    
    ulValores.innerHTML=""
    
    ulValores.appendChild(salario)
    ulValores.appendChild(despesasTotais)
    ulValores.appendChild(saldoFinal)
}
    
    
    

document.getElementById('btnClear').addEventListener('click',function(event){
    //limpa os arquivos json(usar apenas durante o desenvolvimento)

    confirmacao = confirm('Está ação ira apagar todos os dados salvos dentro do localStorage. Tem certeza desta ação?')
    
    if(confirmacao){

        localStorage.removeItem('valores')
        localStorage.removeItem('despesas')

        mostrarValores()
        
    }
    
})
mostrarValores()
