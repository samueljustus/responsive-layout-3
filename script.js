const menuBar = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

menuBar.addEventListener('click', visible);

function visible() {
    nav.classList.toggle('nav--visible')
}