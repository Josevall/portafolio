const burger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

const itemFromList = document.querySelector('.mobile-menu-list');
itemFromList.addEventListener('click', closeBurger);

function closeBurger() {
    mobileMenu.classList.add('inactive');
}

