function calcular(){
    var cot, real, r

    cot = document.getElementById("cot").value
    real = document.getElementById("real").value
    if(cot==""||real==""){
        alert("Não deixe os campos vazios!")
    }else{
        r = Math.round((parseFloat(real)/parseFloat(cot))*100)/100

        document.getElementById("resultado").innerHTML=`O valor em dólar para $ ${real} reais é de ${r} dólares`
    }

}