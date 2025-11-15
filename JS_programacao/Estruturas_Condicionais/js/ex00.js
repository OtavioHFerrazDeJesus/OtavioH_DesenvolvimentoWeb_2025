var nome, idade

nome = prompt("Digite o seu nome:\n")
idade = parseInt(prompt("Digite a sua idade:\n"))

if(idade>=18){
    alert(nome+" você já pode tentar tirar a CNH")
}
else{
    alert(nome+" você ainda não pode tentar fazer a CNH")
}