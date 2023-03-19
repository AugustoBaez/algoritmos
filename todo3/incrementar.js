const incrementar = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i]++
        }
        console.log(arr[i])
    }
    console.log(arr)
    return arr
}

let arr = [1, 2, 3, 4, 5]
let arrActualizado = incrementar(arr)
console.log(arrActualizado)