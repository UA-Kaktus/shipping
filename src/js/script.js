document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileBurger = document.querySelector('.mobile-burger');
    // const mobileMenuClose = document.querySelector('.mobile-menu__close');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu__item > a');

    mobileBurger.addEventListener('click', () => {
        if (mobileBurger.classList.contains('mobile-burger_active')){
            mobileBurger.classList.remove('mobile-burger_active');
            mobileMenu.style.left = '-100%';
        } else {
            mobileBurger.classList.add('mobile-burger_active');
            mobileMenu.style.left = '0';
        }
        // mobileBurger.style.display = 'none';
    });

    mobileMenu.addEventListener('click', (event) => {
        if (event.target == mobileMenu) {
            mobileBurger.classList.remove('mobile-burger_active');
            // mobileBurger.style.display = 'block';
            mobileMenu.style.left = '-100%';
        }
    });
    mobileMenuLinks.forEach(el => {
        el.addEventListener('click', () => {
            mobileBurger.classList.remove('mobile-burger_active');
            // mobileBurger.style.display = 'block';
            mobileMenu.style.left = '-100%';
        });
    });
});