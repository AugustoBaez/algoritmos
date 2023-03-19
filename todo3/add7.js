const addSeven = () => {
    let newArr = []
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7)
    }
    console.log(newArr)
    return newArr
}
let arr = [1, 2, 3, 4, 5]
let newArr = addSeven(arr)