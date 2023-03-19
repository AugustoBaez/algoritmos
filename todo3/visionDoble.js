const doble = () => {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr
}
let arr = [1, 2, 3]
let arrDoble = doble(arr)
console.log(arr)
console.log(arrDoble)