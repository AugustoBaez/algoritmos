const contarPositivos = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++
        }
    }
    arr[arr.length - 1] = count

    return arr
}
let arr = [-1, 1, 1, 1, 1]
let arrMod = contarPositivos(arr)
console.log(arrMod)