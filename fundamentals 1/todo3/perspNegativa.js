const persNegativa = (arr) => {
    let negArr = arr.map(val => -Math.abs(val))
    return negArr
}

let arr = [1, -3, 5]
let result = persNegativa(arr)
console.log(result)