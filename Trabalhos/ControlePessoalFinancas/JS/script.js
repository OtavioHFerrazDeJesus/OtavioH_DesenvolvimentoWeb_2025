document.getElementById("formSalario").addEventListener("submit",function(){
     var salario = document.getElementById("salario").value
     var sal = JSON.parse(localStorage.getItem('salario'))||[]

     sal.push(salario)

     localStorage.setItem('salario', JSON.stringify([]))
     
     valores = JSON.parse(localStorage.getItem('valores'))||[0,0,0]

     valores[0] = parseFloat(valores[0])+parseFloat(salario)

     localStorage.setItem('valores', JSON.stringify(valores))

     

     mostrarTestes()
})

function mostrarTestes(){
     
     var salarios = JSON.parse(localStorage.getItem('salario'))||[]

     var valores = JSON.parse(localStorage.getItem('valores'))||[0,0,0]

     var output = document.getElementById('output')
     output.innerHTML=''

     //Saltotal = document.createElement('li')
     //Saltotal.textContent='Salario Total = '+valores[0]+' Reais'
     //output.appendChild(Saltotal)
     //document.getElementById('output').appendChild(document.createElement('li').textContent='Salario Total = '+valores[0]+' Reais')

     for(let i=0;i<valores.length;i++){
          let item = document.createElement('li')
          item.textContent = salarios[i]

          output.appendChild(item)
     }
}
mostrarTestes()