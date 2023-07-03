function fibonacci(inicial, indice) {
    let sum = 0

    for (let i = inicial; i < indice; i++) {
        sum += i
        console.log(i)
    }
    console.log(sum)
}

fibonacci(0, 5)