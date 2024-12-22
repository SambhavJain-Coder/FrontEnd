var friends = [
    {
        Name: 'raj',
        weight: 60

    }, {
        Name: 'krish',
        weight: 65

    }, {
        Name: 'sam',
        weight: 63

    }, {
        Name: 'udit',
        weight: 67

    }, {
        Name: 'harsh',
        weight: 74

    }, {
        Name: 'adasrsh',
        weight: 84

    }, {
        Name: 'kate',
        weight: 87

    }]

var sum = 0

friends.forEach(function (elem) {
    sum = sum + elem.weight
})

if (sum <= 500) {
    console.log("lift is availiable");

} else {
    console.log("stairs is availiable");

}