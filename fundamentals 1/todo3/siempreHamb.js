const siempreHamb = (arr) => {
    let comida = false
    arr.forEach(val => {
        if (val === 'comida') {
            console.log('delicioso')
            comida = true
        }
    })
    if (!comida) {
        console.log('tengo hambre')
    }
}

let arr1 = [1, 2, 3, 'comida', 5]
let arr2 = [1, 2, 3, 4, 5]
siempreHamb(arr1)
siempreHamb(arr2)