function generateCoinChange(cents) {

    const coinValues = [25, 10, 5, 1]
    const coinCounts = []

    for (let i = 0; i < coinValues.length; i++) {
        const coinValue = coinValues[i]
        const count = Math.floor(cents / coinValue)
        coinCounts[i] = count
        cents -= count * coinValue
    }

    console.log(cents, "centavos puede ser representado por:")
    console.log("quarters: ", coinCounts[0])
    console.log("dimes: ", coinCounts[1])
    console.log("nickels: ", coinCounts[2])
    console.log("pennies: ", coinCounts[3])
}

generateCoinChange(94)