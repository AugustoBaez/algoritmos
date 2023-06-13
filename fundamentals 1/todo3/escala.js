const escala = (arr, num) => {
    const result = arr.map(valor => valor * num)
    return result
}

const arr = [2, 4, 6]
const num = 3
const result = escala(arr, num)
console.log(result)