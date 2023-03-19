const conversion = (degree) => {
    let celsius = (degree - 32) * 5 / 9
    console.log(celsius)
    return celsius
}
conversion(68)

const CtoF = (cDegree) => {
    let fahrenheit = cDegree * 9 / 5 + 32
    console.log(fahrenheit)
    return fahrenheit
}
CtoF(45)