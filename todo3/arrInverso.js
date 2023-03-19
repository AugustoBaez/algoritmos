const invertir = (arr) => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
}

let arr = [3, 1, 6, 4, 2]
invertir(arr)
console.log(arr)