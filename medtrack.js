const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav-wrapper');
const mobileBody = document.querySelector('.body')

function showNav() {
    mobileNav.style.display = 'block';
}
mobileMenu.addEventListener('click', showNav);

function hideNav() {
    mobileNav.style.display = 'none';
}
mobileBody.addEventListener('click', hideNav);
