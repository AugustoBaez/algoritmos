const sumFirst = (arr) => {
    if (typeof arr[0] !== 'number') {
        console.log('el primer valor del arreglo no es un numero')
        return null
    }
    console.log(arr[0] + arr.length)
}
let arr = [10]
sumFirst(arr)