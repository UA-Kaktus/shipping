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

    const slyder = document.querySelector('.review__slyder');
    const slyderItem = document.querySelectorAll('.review__item');
    const slyderLeftArrow = document.querySelector('.review__arrow-left');
    const slyderRightArrow = document.querySelector('.review__arrow-right');
    let slyderCounter = 1;

    slyderLeftArrow.addEventListener('click', () => {
        if(slyderCounter == 0) {
            slyderItem[0].classList.add('review__item_active-left');
            setTimeout(() => {
                slyderItem[0].classList.remove('review__item_active-left');
            }, 400);
            // animation below also works, just using native JS
            // slyderItem[0].animate([{transform: 'translateX(0) scale(150%)'}, {transform: 'translateX(15px) scale(150%)'},{transform: 'translateX(0) scale(150%)'}], {duration: 500, iterations: 1});
            return;
        }
        let slyderItemWidth = +window.getComputedStyle(slyderItem[0]).getPropertyValue('width').slice(0,-2);
        slyderCounter -= 1;
        slyderItem.forEach(el => {
            el.classList.remove('review__item_active');
        });
        slyderItem[slyderCounter].classList.add('review__item_active');
        slyder.style.left = `${-slyderCounter * (slyderItemWidth + 30)}px`;
    });

    slyderRightArrow.addEventListener('click', () => {
        if(slyderCounter == slyderItem.length - 1) {
            slyderItem[slyderCounter].classList.add('review__item_active-right');
            setTimeout(() => {
                slyderItem[slyderCounter].classList.remove('review__item_active-right');
            }, 400);
            return;
        }
        //better use last item in "slyderItem" array, cause of changing width, but in this case doesn't matter what to use
        let slyderItemWidth = +window.getComputedStyle(slyderItem[0]).getPropertyValue('width').slice(0,-2);
        slyderCounter += 1;
        slyderItem.forEach(el => {
            el.classList.remove('review__item_active');
        });
        slyderItem[slyderCounter].classList.add('review__item_active');
        slyder.style.left = `${-slyderCounter * (slyderItemWidth + 30)}px`;
    });

    const modalWindow = document.querySelector('.modal');
    const modalWindowClose = document.querySelector('.modal__close');
    const modalWindowButtons = document.querySelectorAll('[data-modal = "modal-window"]');

    modalWindowButtons.forEach(el => {
        el.addEventListener('click', () => {
            modalWindow.style.display = 'block';
        });
    });

    modalWindow.addEventListener('click', (event) => {
        if (event.target == modalWindow || event.target == modalWindowClose) {
            modalWindow.style.display = 'none';
        }
    });
});