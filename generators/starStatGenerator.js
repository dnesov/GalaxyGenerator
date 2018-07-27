var starNames = [
    "Keppler",
    "Voyager",
    "Alpha",
    "Beta",
    "Gamma",
    "Ad'Gaar",
    "Ka'raar",
    "Bravo",
    "Major",
    "V'a",
    "D'yor",
    "Ge"
]
function generate() {
    var temperature = Math.round(Math.random()*41000)
    var starClass
    console.log("Star Name: "+starNames[Math.round(Math.random()*(starNames.length - 1))]+" "+Math.round(Math.random()*8)) 
    console.log("Temperature(K): "+temperature)
    if(temperature >= 3850 ) {
        starClass = "M"
    }
    if(temperature >= 5300) {
        starClass = "K"
    }
    if(temperature >= 5920) {
        starClass = "G"
    }
    if(temperature >= 7240) {
        starClass = "F"
    }
    if(temperature >= 9500) {
        starClass = "A"
    }
    if(temperature >= 31000) {
        starClass = "B"
    }
    if(temperature >= 41000) {
        starClass = "O"
    }
    

    console.log("Star Class: "+starClass)
}
generate()