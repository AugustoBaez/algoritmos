const bisiesto = (year) => {
    if (year % 400 == 0) {
        console.log("es bisiesto")
    }
    else if (year % 100 == 0) {
        console.log("no es bisiesto")
    }
    else if (year % 4 == 0) {
        console.log("es bisiesto")
    }
    else {
        console.log("no es bisiesto")
    }
}
bisiesto(2000)