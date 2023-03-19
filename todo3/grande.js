const big = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big"
        }
    }
    return arr
}
let arr = [-1, 3, 5, -5]
arr = big(arr)
console.log(arr)