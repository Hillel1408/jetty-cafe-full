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
    autoplay: {
        delay: 3000,
    },
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

const func = (btn, block) => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        if (block.style.maxHeight) block.style.maxHeight = null;
        else block.style.maxHeight = block.scrollHeight + 'px';
    });
};

const menu = document.querySelector('.menu__grid');
const menuBtn = document.querySelector('.menu-btn');

func(menuBtn, menu);

const poster = document.querySelector('.poster__grid');
const posterBtn = document.querySelector('.poster-btn');

func(posterBtn, poster);
