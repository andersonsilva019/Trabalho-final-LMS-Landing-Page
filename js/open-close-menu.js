const openMenuButton = document.querySelector('.btn-menu-open');
const closeMenuButton = document.querySelector('.btn-menu-close');

const navMenu = document.querySelector('.header-nav-list__container');

openMenuButton.addEventListener('click', () => {
  navMenu.classList.add('open-menu');
})

closeMenuButton.addEventListener('click', () => {
  navMenu.classList.remove('open-menu');
})