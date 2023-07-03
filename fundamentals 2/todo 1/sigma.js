function sigma(num) {
    let sum = 0
    for (let i = 0; i < num; i++) {
        sum += i
    }
    let total = sum + num
    return total
}

sigma(5)