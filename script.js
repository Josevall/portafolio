const burger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
burger.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}