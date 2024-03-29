const swiper2 = new Swiper('.swiper-2', {
    allowTouchMove: false,
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 9000,
    },
    effect: 'fade',
    speed: 900,
    breakpoints: {
        410: {
            speed: 1900,
        },
    },
});
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
    autoplay: {
        delay: 9000,
    },
    loop: true,
    speed: 900,
    thumbs: {
        swiper: swiper2,
    },
    breakpoints: {
        410: {
            speed: 1900,
        },
    },
});
const swiper3 = new Swiper('.swiper-3', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-3-button-next',
        prevEl: '.swiper-3-button-prev',
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

/*const poster = document.querySelector('.poster__grid');
const posterBtn = document.querySelector('.poster-btn');

func(posterBtn, poster);*/
