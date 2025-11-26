document.getElementById("formSalario").addEventListener("submit",function(){
     var salario = document.getElementById("salario").value
     var teste = JSON.parse(localStorage.getItem('teste'))||[]

     teste.push(salario)

     localStorage.setItem(JSON.stringify(teste))

     mostrarTestes()
})
function mostrarTestes(){
    
}