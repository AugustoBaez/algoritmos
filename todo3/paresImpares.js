const verificar = (arr) => {
    let impares = 0
    let pares = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pares++
            impares = 0
            if (pares === 3) {
                console.log("Aun mas!")
            }
        }
        else {
            impares++
            pares = 0
            if (impares === 3) {
                console.log("Eso es extrano!")
                impares = 0
            }
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
verificar(arr)

let arr2 = [2, 4, 6, 1, 2, 3, 8, 7, 19, 11]
verificar(arr2)

let arr3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
verificar(arr3)