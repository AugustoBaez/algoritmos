const printMultiples = (param1, param2, param3, param4) => {
    let currentNum = param2
    while (currentNum <= param3) {
        if (currentNum % param1 === 0 && currentNum !== param4) {
            console.log(currentNum)
        }
        currentNum++
    }
}
printMultiples(3, 5, 17, 9)