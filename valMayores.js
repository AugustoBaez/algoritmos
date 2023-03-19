let lista = [1, 3, 5, 7, 9, 13]
let contador = 0

for (let i = 0; i < lista.length; i++) {
    if (lista[i] > lista[1]) {
        console.log(lista[i])
        contador++
    }
}

console.log("la cantidad de valores que son mayores qeu el segundo valor de la lista son: ", contador)