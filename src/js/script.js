const navButton = document.querySelector('.navbutton');
const navLinks = document.querySelector('.nav-links')
let navPressed;

navButton.addEventListener('click', () => {
    navPressed = !navPressed;
    navLinks.classList.remove('nav-links-open');

    if(navPressed) {
        navLinks.classList.toggle('nav-links-open');
    } 
})

const dropdownButton = document.querySelector('.features');
const dropdown = document.querySelector('.dropdown');
let dropPressed;

dropdownButton.addEventListener('click', () => {
    dropPressed = !dropPressed;
    dropdown.classList.remove('drop-pressed');

    if(dropPressed) {
        dropdown.classList.toggle('drop-pressed');
    } 
})