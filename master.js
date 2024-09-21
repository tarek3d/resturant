let upBtn = document.querySelector("button")


window.onscroll = function () { 
    if (window.scrollY >= 415) {
        upBtn.style.display = 'block'
    } else {
        upBtn.style.display = 'none'
    }
}

upBtn.onclick = function () {
    window.scrollTo ({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}