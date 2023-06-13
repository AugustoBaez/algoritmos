const printMults = (lowNum, highNum, mult) => {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i)
        }
    }
}
printMults(2, 9, 3)