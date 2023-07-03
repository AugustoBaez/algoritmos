const printNums = (num) => {
    if (num <= 0) {
        return
    }
    console.log(num)
    printNums(num - 4)
}
printNums(2016)