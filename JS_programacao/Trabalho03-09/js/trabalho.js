n = parseInt(Math.random()*101)

function Pressed(){

    var jg = parseInt(document.getElementById('numb').value);

    if(jg>n){
        alert("Menor!");
        document.getElementById("r").textContent = "O número é menor";
    }else if(jg<n){
        alert("Maior!");
        document.getElementById("r").textContent = "O número é maior";
    }else if(jg==n){
        alert("Você acertou!!")
        document.getElementById("r").textContent = "Você acertou, Agora o número foi reiniciado";
        n = parseInt(Math.random()*101)
        
    }else{
        alert("Informe um número na textarea")
    }
}