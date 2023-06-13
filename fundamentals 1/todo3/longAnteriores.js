const stringLong = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].length
    }
    console.log(arr)
    return arr
}

let arr = ["hola", "sosiisis", "2"]
let arrActualizado = stringLong(arr)
console.log(arrActualizado)
