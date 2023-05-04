const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});

new fullpage('#fullpage', {
    autoScrolling: true,
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

Fancybox.bind('[data-fancybox="gallery"]', {});

const menu = document.querySelector('.menu__grid');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    if (menu.style.maxHeight) menu.style.maxHeight = null;
    else menu.style.maxHeight = menu.scrollHeight + 'px';
});
