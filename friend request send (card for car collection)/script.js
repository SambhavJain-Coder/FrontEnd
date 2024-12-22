var btn = document.querySelector("button")
var istatus = document.querySelector("h5")
var flip = document.querySelector("h2")

var flag = 0

btn.addEventListener("click", function () {


    if (flag == 0) {
        istatus.innerHTML = "market"
        istatus.style.color = "blue"
        btn.innerHTML = "BACK"
        flip.innerHTML = "modified car"
        flag = 1
        var modified = document.querySelector("img")
        modified.setAttribute("src", "https://images.unsplash.com/photo-1662053643193-d0356b44a03c?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    }
    else {
        istatus.innerHTML = "collection"
        istatus.style.color = " rgb(223, 215, 200)"
        flip.innerHTML = "old car"
        btn.innerHTML = "NEXT"
        flag = 0
        var modified = document.querySelector("img")
        modified.setAttribute("src", "https://images.unsplash.com/photo-1612179677875-cf78b119aa1e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    }

})