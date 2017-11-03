menuElem = document.getElementById('sweeties');
var titleElem = menuElem.querySelector('.title');
//in this function our toggle-menu
titleElem.onclick = function () {
    menuElem.classList.toggle('open');
    var fade = document.querySelector(".fade");
    if (getComputedStyle(fade).display == "none") {
        fade.style.display = "block";
    }
    else {
        fade.style.display = "none";
    }
}

