var btn = document.querySelector("button")
var body = document.querySelector("body")

var emojis = ['https://static.vecteezy.com/system/resources/thumbnails/033/045/826/small/happy-emotion-emoji-transparent-background-png.png',
    'https://static.vecteezy.com/system/resources/previews/029/140/204/non_2x/happy-emoji-happy-emoji-happy-emoji-transparent-background-ai-generative-free-png.png', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9b8nFYfNXoXZOZFRhAIgWzRYi0ELSjUYVwzXyOoAM7jSCeaXQHZBIJPc2vuZC_O_-SGc&usqp=CAU',
    'https://i5.walmartimages.com/seo/Dreaming-Happy-Face-Emoji-Dreamy-12-Vinyl-Sticker-Waterproof-Decal_c0c6f3bf-9294-4a5d-8498-c9adf9dcfcb6.8dd636f0033f9282c45ae6e220f2f01f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    'https://icon2.cleanpng.com/20240322/qq/transparent-smiley-face-yellow-emoticon-wearing-sneakers-smiling-pointin65fde8108fa996.71728077.webp'
]

btn.addEventListener("click",function(){
    var img = document.createElement("img")

    var valueX = Math.random()*100
    var valueY = Math.random()*100
    var rot = Math.random()*180
    var num = Math.floor(Math.random()*emojis.length)

    img.setAttribute('src',emojis[num])
     
    img.style.height = "80px"
    img.style.position ="absolute" 
    img.style.left = valueX + "%"
    img.style.top = valueY + "%"
    img.style.rotate = rot + "deg"


    body.appendChild(img)

})