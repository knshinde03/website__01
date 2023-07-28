const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

function hamburgerMenuButton() {
    var nav = document.querySelector(".header__nav");
    var lineBefore = document.querySelector(".menu-before");
    var lineCenter = document.querySelector(".menu-center");
    var lineAfter = document.querySelector(".menu-after");
    var menuButton = document.querySelector(".header__menu");

    if(nav.style.display === "block") {
        menuButton.style.transition = "transform 1s";
        menuButton.style.transform = "rotate(0)";
        lineCenter.style.opacity = "1";
        lineBefore.style.transform = "translateY(0) rotate(0)";
        lineAfter.style.transform = "translateY(0) rotate(0)";
        nav.style.display = "none";
    }
    else {
        menuButton.style.transition = "transform 1s";
        menuButton.style.transform = "rotate(720deg)";
        lineCenter.style.opacity = "0";
        lineBefore.style.transform = "translateY(12px) rotate(45deg)";
        lineAfter.style.transform = "translateY(-12px) rotate(-45deg)";
        nav.style.display = "block";
    }
}