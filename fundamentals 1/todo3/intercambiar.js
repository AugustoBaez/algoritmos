const intercambiarCentro = (arr) => {
    const longitud = arr.length
    for (let i = 0; i < longitud / 2; i += 2) {
        const temp = arr[i]
        arr[i] = arr[longitud - 1 - i]
        arr[longitud - 1 - i] = temp
    }
    return arr
}
let arr1 = [true, 42, "ada", 2, "pizza"]
let arr2 = [1, 2, 3, 4, 5, 6]
console.log(intercambiarCentro(arr1))
console.log(intercambiarCentro(arr2))