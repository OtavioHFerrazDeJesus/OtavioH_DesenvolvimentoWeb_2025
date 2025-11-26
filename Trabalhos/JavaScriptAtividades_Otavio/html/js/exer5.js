n1 = parseFloat(prompt("Informe a base do triângulo:"))
n2 = parseFloat(prompt("Informe a altura do triângulo:"))

r = (n1*n2)/2

if (r<=0){
    alert("O triângulo citado acima é impossivel")
}else{
    alert("A área do triângulo descrito é: "+r+" u.c quadrado")
}

