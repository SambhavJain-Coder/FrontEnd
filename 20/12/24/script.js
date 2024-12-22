var users = [
    {
        dp: 'https://images.unsplash.com/photo-1732226521193-acd78a06a58a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1732480509151-cb3d991ff9a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        username: 'devil boy'
    },

    {
        dp: 'https://images.unsplash.com/photo-1734000402881-e805b48afe3e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1734084192508-33bd2cd57f09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        username: 'devil boy'
    }, {
        dp: 'https://images.unsplash.com/photo-1725640904544-886450cec628?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1734015169493-845b53c1cbc2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        username: 'devil boy'
    },

    {
        dp: 'https://images.unsplash.com/photo-1732226521193-acd78a06a58a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1732480509151-cb3d991ff9a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        username: 'devil boy'
    },
    {
        dp: 'https://images.unsplash.com/photo-1734000402881-e805b48afe3e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1734084192508-33bd2cd57f09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        username: 'devil boy'
    },
    {
        dp: 'https://images.unsplash.com/photo-1725640904544-886450cec628?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1734015169493-845b53c1cbc2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        username: 'devil boy'
    }]

var sum = ''

users.forEach(function (elem, idx) {
    sum = sum + ` <div class="story">
                <img id = ${idx} src="${elem.dp}" alt="">
            </div>`

})
var storiyan = document.querySelector(".storiyan")

var full = document.querySelector(".full")

storiyan.innerHTML = sum

storiyan.addEventListener('click', function (dets) {

    var golden = users[dets.target.id]
    console.log(golden)

    full.style.display = 'block'
    full.style.backgroundImage = `url('${golden.story}')`

    setTimeout(() => {
        full.style.display = 'none'
    },3000);
})

