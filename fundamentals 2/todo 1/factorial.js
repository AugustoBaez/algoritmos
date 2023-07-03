function factorial(num) {
    let sum = 1
    for (let i = 1; i < num; i++) {
        sum = sum * i
    }
    let total = sum * num
    console.log(total)
    return total
}
factorial(5)