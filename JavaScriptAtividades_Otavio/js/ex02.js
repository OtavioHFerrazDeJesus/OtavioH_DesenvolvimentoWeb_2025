/*Variáveis em JS*/ 

var frase 
frase = "Aqui temos uma String"

alert(frase)

/*Fazendo entrada de dados para uma variável*/

var nome 
nome = prompt("Digite o seu nome: ")

alert("Bem vindo "+nome)

var idade
idade = prompt("Digite a sua idade:")
alert("Você tem "+idade+" anos")

/*Operações Aritméticas com JS */

var n1, n2, r

n1 = 14
n2 = 20

r = n1+n2

alert("O resultado da soma entre "+n1+"+"+n2+"="+r)

/*Considere que os valores de n1 e n2 sejam digitados pelo usuário */

n1 = parseInt(prompt("Digite o primeiro valor"))
n2 = parseInt(prompt("Digite o segundo valor:"))

r = n1+n2

alert("O resultado da soma entre "+n1+"+"+n2+"="+r)