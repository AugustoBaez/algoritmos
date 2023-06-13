function sumToOne(num) {

    const numbers = Array.from(String(num), Number)

    const sum = numbers.reduce((acc, curr) => acc + curr, 0)
    if (sum < 10) {
        return sum
    }
    else {
        return sumToOne(sum)
    }
}
sumToOne(928)