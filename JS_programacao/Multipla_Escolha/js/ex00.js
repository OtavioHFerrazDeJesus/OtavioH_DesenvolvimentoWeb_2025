var dia

dia = parseInt(prompt("Digite o número do dia da semana correspondente"))

switch (dia){
    case 1:{
        alert("Domingo")
        break
    }
    case 2:{
        alert("Segunda-Feira")
        break
    }
    case 3:{
        alert("Terça-Feira")
        break
    }

    case 4:{
        alert("Quarta-Feira")
        break
    }

    case 5:{
        alert("Quinta-Feira")
        break
    }

    case 6:{
        alert("Sexta-Feira")
        break
    }
    case 7:{
        alert("Sábado")
        break
    }
    default:{
        alert("Opção inválida")
        break
    }
}