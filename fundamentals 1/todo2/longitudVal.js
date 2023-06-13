const crearArr = (num1, num2) => {
    if (num1 === num2) {
        console.log("Jinx!")
    }
    let arr = []
    for (let i = 0; i < num1; i++) {
        arr.push(num2)
    }
    return arr
}
crearArr(10, 10)