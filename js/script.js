window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
         menuItem = document.querySelectorAll('.header__menu-item'),
         burger = document.querySelector('.burger');
         
         burger.addEventListener('click', () => {
            burger.classList.toggle('burger--active');
            menu.classList.toggle('header__menu--active');
         });

         menuItem.forEach(item => {
            item.addEventListener('click', () => {
                burger.classList.toggle('burger--active');
                menu.classList.toggle('header__menu--active');
            })
         });
})