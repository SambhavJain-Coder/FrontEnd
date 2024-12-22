

var clg = ['LNCT', 'TIT', 'IPER', 'BANSAL', 'ORIENTAL', 'PRESTIGE', 'BSS', 'JNCT', 'CARRER', 'JLU', 'SAGE','RGPV','SAM','IES','PEOPLES']

var btn = document.querySelector("button")
var istatus = document.querySelector("h2")
var flip = document.querySelector("h1")

btn.addEventListener('click', function () {
    var num = Math.floor(Math.random() * clg.length)

    istatus.innerHTML = clg[num]
    
    istatus.style.color = "indigo"

    flip.style.border = "9px solid white"
    flip.style.backgroundColor = "lightblue"
    flip.style.color = "blue"
})
