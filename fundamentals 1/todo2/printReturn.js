const printArr = (arr) => {
    console.log(arr[0])
    return arr[1]
}
let arr = [10, 20]
let segundo = printArr(arr)
console.log("el segundo valor es", segundo)