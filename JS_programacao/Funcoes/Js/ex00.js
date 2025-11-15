function exibir_mensagem(){
    alert("Função sem retorno e sem parametros")
    var n1, n2, r
    n1=4
    n2=8
    r=n2-n1
    alert("O resultado da subtração é "+r)
}

exibir_mensagem()

function subtrair(n1,n2){
    var r

    r = n2-n1

    alert("O resultado da subtração é "+r)
}


var x, y
x = 10
y = 6

subtrair(x,y)

subtrair(3,9)

function somar(n1, n2){
    var s
    s = n1+n2
    
    return(s)
}

var resultado_soma

resultado_soma = somar(5,9)

alert(resultado_soma)


/*Exercicio de Fixação */
/*1) Crie uma função que leia 3 valores digitados pelo usuário. E realize a multiplicação dos valores e apresente em tela. */

function multSemRetorno(){
    var n1, n2, n3, r
    n1 = 2
    n2 = 5
    n3 = 3
    r = n1*n2*n3

    alert("Função sem parametro ou retorno\n\n"+r)
}
multSemRetorno()

function multComParamSemRetorno(n1, n2 , n3){
    var r
    r = n1*n2*n3

    alert("Função com parametro sem retorno\n\n"+r)
}
var v1, v2, v3
v1=parseInt(prompt("Informe um numero"))
v2=parseInt(prompt("Informe um numero"))
v3=parseInt(prompt("Informe um numero"))

multComParamSemRetorno(v1,v2,v3)


function multComParamERetorno(v1,v2,v3){
    var r

    r = n1*n2*n3
    return(r)
    
}

v1=parseInt(prompt("Informe um numero"))
v2=parseInt(prompt("Informe um numero"))
v3=parseInt(prompt("Informe um numero"))

alert("Função com parametro e retorno \n\n"+multComParamERetorno(v1,v2,v3))


function mostrarValor(n1){
    alert("Função secundária que apenas puxa o valor já multiplicado por outra função\n\n"+n1)
}

v1=parseInt(prompt("Informe um numero"))
v2=parseInt(prompt("Informe um numero"))
v3=parseInt(prompt("Informe um numero"))

mostrarValor(multComParamERetorno(v1,v2,v3))