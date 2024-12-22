var users = [{
    Name:'amanda_nash',
    username:'amanda nash',
    media:37,
    followers:'241k',
    following:231
},{
    Name:'krish_ford',
    username:'krish ford',
    media:'1.2k',
    followers:'489.2k',
    following:987
},{
    Name:'camcam',
    username:'cammran sheldon',
    media:'1.2k',
    followers:'489.2k',
    following:987
},{
    Name:'krish_ford',
    username:'krish ford',
    media:'1.2k',
    followers:'489.2k',
    following:987
},{
    Name:'amanda_nash',
    username:'amanda nash',
    media:37,
    followers:'241k',
    following:231
},{
    Name:'camcam',
    username:'cammran sheldon',
    media:'1.2k',
    followers:'489.2k',
    following:987
},{
    Name:'amanda_nash',
    username:'amanda nash',
    media:37,
    followers:'241k',
    following:231
},{
    Name:'krish_ford',
    username:'krish ford',
    media:'1.2k',
    followers:'489.2k',
    following:987
},{
    Name:'camcam',
    username:'cammran sheldon',
    media:'1.2k',
    followers:'489.2k',
    following:987
}]
    
      

    var sum = ''

users.forEach(function (elem) {

    /*console.log(elem.name);*/

    sum += `<div class="card">
        <img src="https://images.unsplash.com/photo-1725452119307-14e2642a78a6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="">
        <img src="https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="">
        <img src="https://images.unsplash.com/photo-1653198020531-4a15524333e9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="">
        <div class="circle">
            <img src="https://images.unsplash.com/photo-1724710152008-9c64ee7ab7ed?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="">
        </div>
        <h1> ${elem.Name} </h1>
        <h4> ${elem.username} </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quisquam?</p>

        <div class="insta">
            <div>
                <h5> ${elem.media} </h5>
                <h5> media </h5>
            </div>
            <div>
                <h5> ${elem.followers} </h5>
                <h5> followers </h5>
            </div>
            <div>
                <h5> ${elem.following}</h5>
                <h5> following </h5>
            </div>
        </div>
    </div>`

})

var body = document.querySelector("body")

body.innerHTML = sum 