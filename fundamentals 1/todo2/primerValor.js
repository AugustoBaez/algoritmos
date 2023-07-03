const verifyArr = (arr) => {
    let longitud = arr.length

    if (arr[0] > longitud) {
        console.log("Demasiado grande!")
    }
    else if (arr[0] < longitud) {
        console.log("Demasiado pequeno!")
    }
    else {
        console.log("Perfecto!")
    }
}
let arr = [10, 121]
verifyArr(arr)