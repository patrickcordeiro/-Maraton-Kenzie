function positions (firstPlace, secondPlace, lastPlace) {
    
    let podium = [firstPlace, secondPlace, lastPlace]
    let posicaoDaniel = podium.indexOf("Daniel")
    
    if(posicaoDaniel > 0){

        let anteriorDaniel = podium[posicaoDaniel - 1]
        podium[posicaoDaniel - 1]  = "Daniel"
        podium[posicaoDaniel] = anteriorDaniel

    }

    let mural = `1°- Colocado ${podium[0]}, 2°- Colocado ${podium[1]}, 3°- Colocado ${podium[2]}.`

    return mural
}

//exemplos 
console.log("Teste 1: " + positions("Daniel", "Maria", "Martha"))

console.log("Teste 2: " + positions("Martha", "Daniel", "Maria"))

console.log("Teste 3: " + positions("Maria", "Martha", "Daniel"))