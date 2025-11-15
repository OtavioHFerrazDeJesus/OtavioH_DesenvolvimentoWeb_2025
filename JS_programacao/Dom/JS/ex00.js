function somar(){
    var v1, v2, r
    v1 = document.getElementById('primeirovalor').value
    v2 = document.getElementById('segundovalor').value
    if (v1 ==""||v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        r = parseFloat(v1) + parseFloat(v2)
        document.getElementById('resultadoSm').innerHTML = `O resultado da soma é ${r}`
    }
}

function subtrair(){
    var v1, v2 ,r 

    v1 = document.getElementById('primeirovalor').value
    v2 = document.getElementById('segundovalor').value
    if (v1==""||v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        r = parseFloat(v1)-parseFloat(v2)
        document.getElementById('resultadoSb').innerHTML = `O resultado da subtração é ${r}`
    }
}
function multiplicar(){
    var v1, v2 ,r
    v1 = document.getElementById('primeirovalor').value
    v2 = document.getElementById('segundovalor').value
    if (v1==""||v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        r = parseFloat(v1)*parseFloat(v2)
        document.getElementById('resultadoMt').innerHTML = `O resultado da multiplicação é ${r}`
    }
}
function divisao(){
    var v1, v2 ,r
    v1 = document.getElementById('primeirovalor').value
    v2 = document.getElementById('segundovalor').value
    if (v1==""||v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        if (parseFloat(v2)==0){
            alert("Não é possível dividir por zero")
        }else{
            r = parseFloat(v1)/parseFloat(v2)
            document.getElementById('resultadoDv').innerHTML = `O resultado da divisão é ${r}`
        }
        
    }
}
