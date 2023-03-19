const regresiva = (num) => {
    let result = []
    for (let i = num; i >= 0; i--) {
        result.push(i)
    }
    return result
}
let arr = regresiva(20)
console.log(arr)
console.log(arr.length)