n1 = parseFloat(prompt("Informe quantos Km você percorreu:"))
n2 = parseFloat(prompt("Informe quantos Litros foram gastos:"))

r = n1/n2

if (r < 0){
    alert("Por favor informe valores reais da próxima vez")
}else{
    alert("A média de Km/L foi de "+r)
}