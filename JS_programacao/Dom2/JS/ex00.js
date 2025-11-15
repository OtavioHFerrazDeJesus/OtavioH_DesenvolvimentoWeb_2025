var elemento
elemento = document.getElementById("titulo")
//alert(elemento)

function mudartitulo(){
    var titulo
    titulo = document.getElementById("titulo")

    var st = titulo.textContent

    titulo.innerHTML="Alterando o titulo via JS"
}

function mudarestilo(){
    var titulo
    titulo = document.getElementById("titulo")

    titulo.style.color="blue"
    titulo.style.backgroundColor="pink"
    titulo.style.fontSize="68px"
}

function destacar(){
    var titulo = document.getElementById("titulo")
    titulo.classList.add("destacado")
}

function remover(){
    var titulo = document.getElementById("titulo")

    titulo.classList.remove("destacado")
}

function alternar(){
    var titulo = document.getElementById("titulo")
    titulo.classList.toggle("destacado")
}

function adicionartexto(){
    var novo
    novo=document.createElement("p")
    novo.id = "paragrafo"
    novo.innerText="Novo parágrafo criado com JS"

    var div = document.getElementById("container")
    div.appendChild(novo)
}

function removertexto(){
    var p = document.getElementById("paragrafo")

    if (p){
        p.remove()
    }else{
        alert("Não há texto para remover")
    }
}