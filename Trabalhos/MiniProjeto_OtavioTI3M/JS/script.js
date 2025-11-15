
function sim(){
    var n = document.getElementById("nao").checked=false
    var s = document.getElementById("sim").checked=true
}
function nao(){
    var n = document.getElementById("nao").checked=true
    var s = document.getElementById("sim").checked=false
}



function adicionar(){
    var nota = document.getElementById("nota").value
    
    var n, s
    n = document.getElementById("nao").checked
    s = document.getElementById("sim").checked

    if(nota != ""){
        var lista = document.createElement("li")
        lista.appendChild(document.createTextNode(nota)) 
        var btn = document.createElement("input")
        btn.setAttribute("type","button")
        btn.setAttribute("value","del")
        btn.setAttribute("class","btn del")
        btn.setAttribute("onClick","this.parentElement.remove()")

        lista.appendChild(btn)

        if(n==true){
            document.getElementById("nota").value=""
            document.getElementById("nurg").appendChild(lista)
        }else if(s==true){
            document.getElementById("nota").value=""
            document.getElementById("urg").appendChild(lista)
        }else{
            alert("Está nota é urgente ou não? (por favor selecione)")
        }
        
        

    }else{
        alert("Digite algo")
    }
    
}

function deletar(){

    var urgente = document.getElementById("urg")
    var n_urgente = document.getElementById("nurg")

    if  (urgente.hasChildNodes()==false &&n_urgente.hasChildNodes()==false){
        alert("Não há notas")
    }
    else{
        while(urgente.hasChildNodes()||n_urgente.hasChildNodes()){

            if(urgente.hasChildNodes()){
                urgente.removeChild(urgente.firstChild)
            }
            else{
                n_urgente.removeChild(n_urgente.firstChild)
            }
        }
    }
    
}


    
