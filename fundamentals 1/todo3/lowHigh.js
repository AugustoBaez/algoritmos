const minMax = (arr) => {
    let minVal = arr[0]
    let maxVal = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i]
        }
        if (arr[i] > maxVal) {
            maxVal = arr[i]
        }
    }
    console.log("valor minimo: ", minVal)
    return maxVal
}

let arr = [3, 5, 1, 9, 2]
let maxVal = minMax(arr)
console.log("valor maximo: ", maxVal)
