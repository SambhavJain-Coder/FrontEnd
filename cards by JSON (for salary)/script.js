var users = [
    {
        name: 'Sam',
        age: 22,
        city: 'bhopal',
        salary: '12000'

    }, {
        name: 'Raj',
        age: 30,
        city: 'indore',
        salary: '25000'

    }, {
        name: 'Devansh',
        age: 35,
        city: 'ladakh',
        salary: '40000'
    }]

/*console.log(users)*/

var sum = ''

users.forEach(function (elem) {

    /*console.log(elem.name);*/

    sum += ` <div class="card">
        <h1> ${elem.name} </h1>
        <h4> ${elem.age} ,${elem.city} </h4>
        <h5> Salary : ${elem.salary} </h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quisquam?</p>
    </div> `

})

var body = document.querySelector("body")

body.innerHTML = sum 