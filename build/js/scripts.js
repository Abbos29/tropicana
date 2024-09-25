// Custom Scripts
// Custom scripts
const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__menu')

burger.addEventListener('click', () => {
    menu.classList.toggle('open-menu')
})







// SWIPERS


const swiperWaysList = new Swiper('.ways-list__swiper', {

    navigation: {
        nextEl: '.ways-list__btns .list__swiper-next',
        prevEl: '.ways-list__btns .list__swiper-prev',
    },

    slidesPerView: 2,
    spaceBetween: 10,

    breakpoints: {
        1450: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 2.2,
        }
    }
});



const swiperMentorList = new Swiper('.mentor-list__swiper', {

    navigation: {
        nextEl: '.mentor-list__btns .list__swiper-next',
        prevEl: '.mentor-list__btns .list__swiper-prev',
    },

    slidesPerView: 2,
    spaceBetween: 10,

    breakpoints: {
        1450: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 2.2,
        }
    }
});



const swiperEventList = new Swiper('.event-list__swiper', {

    navigation: {
        nextEl: '.event-list__btns .list__swiper-next',
        prevEl: '.event-list__btns .list__swiper-prev',
    },

    slidesPerView: 2,
    spaceBetween: 10,

    breakpoints: {
        1450: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2.5,
        }
    }
});
