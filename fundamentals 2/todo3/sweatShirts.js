function sweatshirtPricing(num) {
    let price = 20

    if (num == 2) {
        price = price - (price * 0.09)
    }
    else if (num == 3) {
        price = price - (price * 0.19)
    }
    else if (num >= 4) {
        price = price - (price * 0.35)
    }
    console.log(price)
    return price 
}

sweatshirtPricing(4)