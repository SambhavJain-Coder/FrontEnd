var btn = document.querySelector("button")
var istatus = document.querySelector("h1")

var flag = 0
btn.addEventListener("click", function () {
    if (flag == 0) {

        istatus.innerHTML = "indore"
        istatus.style.color = "pink"

        setTimeout(function () {
            istatus.innerHTML = "bhopal"
            istatus.style.color = "darkgreen"
            istatus.style.border = "9px solid white"
            istatus.style.backgroundColor = "lightblue"

            btn.innerHTML = "degree"
            flag = 1

        }, 2000) 

        
    } else {
        istatus.innerHTML = "indore"
        istatus.style.color = "black"
        istatus.style.border = " 4px solid rgb(119, 28, 164)"
        istatus.style.backgroundColor = " rgb(203, 179, 134)"
        btn.innerHTML = "affliated"
        flag = 0
    }
})