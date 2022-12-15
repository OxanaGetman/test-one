function element_up () {
    x = 0;
    x = document.querySelector("#imgOne").offsetTop;
    xn = x - 10;
    document.querySelector("#imgOne").style.top = xn+"px"
}

function element_down() {x = 0;
    x = document.querySelector("#imgOne").offsetTop;
    xn = x + 10;
    document.querySelector("#imgOne").style.top = xn+"px"
}