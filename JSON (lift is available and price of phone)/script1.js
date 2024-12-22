var phones = [
    {
        model: 'samsung',
        price: 50000,
        color: 'black',
        quantity: 43

    }, {
        model: 'iphone',
        price: 70000,
        color: 'white',
        quantity: 64

    }, {
        model: 'samsung',
        price: 10000,
        color: 'blue',
        quantity: 54
    }]

var sum = 0

phones.forEach(function (elem) {
    sum = (sum + elem.price * elem.quantity)
})

console.log(sum)