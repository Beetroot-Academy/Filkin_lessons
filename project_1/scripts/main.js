const burger = document.querySelector('.header__burger');
const navList = document.querySelector('.nav__list');

burger.addEventListener('click', openNav);

function openNav() {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
}