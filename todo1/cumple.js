let mesNac = 10
let diaNac = 12

let numero = prompt("ingresa un numero")
let numero2 = prompt("ingresa otro numero")

if ((numero == mesNac % numero2 == diaNac) || (numero == diaNac && numero2 == mesNac)) {
    console.log("Como lo supiste?")
}
else {
    console.log("un dia cualquiera...")
}