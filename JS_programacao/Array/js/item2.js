lista=["Gervronilson","Estrada A","Linha B", 1880, 18.5, true]


/*exibir elementos da lista percorrendo com laço de repetição e inserindo os dados no HTML*/

for(i=0;i<lista.length;i++){
    document.write("<h2>"+lista[i]+"</h2>")
}

/*adicionar elemento ao fim da lista*/

lista.push("84500-000")

alert(lista)

/*remover o ultmo elemento da lista */

lista.pop()

alert(lista)

/*Remover o primeiro elemtento da lista */

lista.shift()
alert(lista)

/*adicionar um item como primeiro elemtento da lista */
lista.unshift("Gervronésio")
alert(lista)