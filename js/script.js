const navMenu = document.querySelector(".nav-menu");
const toggler = document.querySelector(".hamburger");
const icon = document.querySelector("#imgId");

let isToggled = false;

toggler.addEventListener('click', () => {
    if (!isToggled) {
        icon.src = "assets/images/icon-close.svg";
        navMenu.classList.add("show");
    } else {
        navMenu.classList.remove("show");
        icon.src = "assets/images/icon-hamburger.svg";
    }

    isToggled = isToggled ? false : true;
});