function messyMath(num) {
    let sum = 0

    for (let i = 0; i <= num; i++) {
        if (i === num / 3) {
            return -1
        }

        if (i % 3 == 0) {
            continue
        }
        else if (i % 7 == 0) {
            sum += i * 2
        }
        else {
            sum += i
        }
    }
    console.log(sum)
    return sum
}

messyMath(8)