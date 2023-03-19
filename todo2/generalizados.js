const mayoresQueElSegundo = (arr) => {
    if (arr.length <= 1) {
        console.log("el array tiene menos de dos elementos. no hay segundo valor")
        return []
    }
    let newArr = []
    let contador = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            newArr.push(arr[i])
            contador++
        }
    }
    console.log("la cantidad de valores que son mayores que el segundo valor del arreglo es: ", contador)
    return newArr
}
let arr = [20, 45, 5, 6, 7, 1]
let resultado = mayoresQueElSegundo(arr)
console.log(resultado)