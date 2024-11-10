const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger-menu");
hamburger.onclick = () => {
    menu.classList.toggle("show");
}
const form = document.querySelector(".form");