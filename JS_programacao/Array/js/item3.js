var frutas =[]

var f
do{
    f=prompt("Digite a fruta")
    if(f==null){
        alert("Vazio")
    }else{
        frutas.push(f)
    }
}while(f!=null)
   
alert(frutas)

for(var i=0;i<frutas.length;i++){
    
    document.write("<h2>"+frutas[i]+"</h2>")
    
}