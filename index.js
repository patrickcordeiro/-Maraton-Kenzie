
function positions (firstPlace, secondPlace, lastPlace) {
    
    let podium = [firstPlace, secondPlace, lastPlace]
    let posicaoDaniel = podium.indexOf("Daniel")
    
    let mural = " "

    if(posicaoDaniel > 0){

        let anteriorDaniel = podium[posicaoDaniel - 1]
        podium[posicaoDaniel - 1]  = "Daniel"
        podium[posicaoDaniel] = anteriorDaniel
  
        console.log(mural = `1°- Colocado ${podium[0]}, 2°- Colocado ${podium[1]}, 3°- Colocado ${podium[2]}.`)

    }else {

        console.log(mural = `1°- Colocado ${podium[0]}, 2°- Colocado ${podium[1]}, 3°- Colocado ${podium[2]}.`)     

    }
}

//exemplos 
positions("Daniel", "Maria", "Martha")

positions("Martha", "Daniel", "Maria")

positions("Maria", "Martha", "Daniel")