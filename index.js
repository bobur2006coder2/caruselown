let btn = document.querySelectorAll("button")
let imgContainer = document.querySelector(".imgs")
let imgs = document.querySelectorAll("img")

let i = 0;


function avt() {
    i++
    minus()
}

function minus() {
    if (i > imgs.length - 1) {
        i = 0
    } else if (i < 0) {
        i = imgs.length - 1
    }
    imgContainer.style.transform = `translateX(${-i * 500}px)`
}

btn[1].addEventListener("click", () => {
    i++
    minus()

})



btn[0].addEventListener("click", () => {
    i--
    minus()
  
})








