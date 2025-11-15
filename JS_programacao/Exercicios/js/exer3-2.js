var n1, n2, n3, n4, freq, r

n1 = parseFloat(prompt("Informe a sua primeira nota:"))
n2 = parseFloat(prompt("Informe a sua segunda nota:"))
n3 = parseFloat(prompt("Informe a sua terceira nota:"))
n4 = parseFloat(prompt("Informe a sua quarta nota:"))

freq = parseInt(prompt("Informe em números a sua frequência nas aulas"))

r = (n1+n2+n3+n4)/4

if((r<7)&&(freq<75)){
    alert("Reprovado")
}else if(freq<75){
    alert("Recuperação")
}else{
    alert("Aprovado")
}