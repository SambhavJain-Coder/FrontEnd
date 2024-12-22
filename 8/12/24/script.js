var body = document.querySelector("body")
var cursor = document.querySelector("#cursor")
var h1 = document.querySelector("h1")

body.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"

})

h1.addEventListener("mouseenter", function () {
    cursor.style.scale = 3
    h1.style.color = "yellow"
    h1.style.fontSize = "115px"

})

h1.addEventListener("mouseleave", function () {
    cursor.style.scale = 1
    h1.style.color = "white"
    h1.style.fontSize = "140px"
})