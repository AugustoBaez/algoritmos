const firstAndRet = (arr) => {
    let penultimo = arr[arr.length - 2]
    let firstImpar = null

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            firstImpar = arr[i]
            break
        }
    }
    console.log("penultimo valor: ", penultimo)
    return firstImpar
}

let arr = [2, 4, 7, 6, 8, 1]
let firstImpar = firstAndRet(arr)
console.log("primer valor impar: ", firstImpar)