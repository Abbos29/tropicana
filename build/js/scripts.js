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









// OPEN MODAL

const heroModal = document.querySelector('.modal')
const heroModalClose = document.querySelector('.modal__close')
const heroModalOpen = document.querySelectorAll('.modal__open')

heroModalOpen.forEach(btn => {
    btn.addEventListener('click', () => {
        heroModal.classList.add('active')
    })
})

heroModalClose.addEventListener('click', () => {
    heroModal.classList.remove('active')
})

heroModal.addEventListener('click', (e) => {
    if (!e.target.closest('.modal__wrapper')) {
        heroModal.classList.remove('active')
    }
})


// MENTORS DATA

const mentorsData = [
    {
        id: 1,
        name: 'Шишкина Юлия',
        prof: 'Судья, педагог, хореограф, профессиональная танцовщица восточного танца',
        description: `
            <p>Ученица Т. П. Дорош, долгое время была солисткой ансамбля "Жемчужина".</p>
            <p>Многократный призёр различных конкурсов и чемпионатов по belly dance по версии ОРТО, IDO, Лиги Профессионалов восточного танца и других организаций.</p>
            <p>Долгое время жила в Москве, успешно преподавала в Московской Международной школе арабского танца, также имела свою школу восточного танца, выступала на самых ярких и престижных площадках Москвы, работала со звёздами российской эстрады.</p>
            <p>Провела более сотни мастер-классов по классическому и фольклорному танцу не только в России, а также в Турции и Китае.</p>
        `,
        image: './img/teacher-1.jpeg'
    },
    {
        id: 2,
        name: 'Сырых Роман',
        prof: 'Танцор международного класса по бальным танцам (10 танцев), мастер спорта России',
        description: `
            <p>Топ 7 мирового рейтинга WDFS по 10 танцам.</p>
            <p>Танцевальный опыт — 22 года (в России и за рубежом), стаж преподавания более 14 лет.</p>
            <p>Направления: бальные танцы (10 танцев) и Pro Am.</p>
        `,
        image: './img/teacher-2.jpeg'
    },
    {
        id: 3,
        name: 'Раздорских Ольга',
        prof: 'Основатель и руководитель танцевального клуба "Тропикана"',
        description: `
            <p>Танцевальный стаж 36 лет, опыт преподавания 28 лет, опыт судейства конкурсов 10 лет.</p>
            <p>Два высших образования (ЛГПУ и СПб НГУ им. П.Ф. Лесгафта).</p>
            <p>Член Международного Совета по танцу CID UNESCO.</p>
            <p>Танцор международного класса по спортивным бальным танцам, 12-кратная чемпионка России (в разных направлениях).</p>
            <p>Организатор фестивалей "Давайте потанцуем" и "Ритмы планеты".</p>
        `,
        image: './img/teacher-3.jpeg'
    },
    {
        id: 4,
        name: 'Шмакова Елена',
        prof: 'Эстрадные танцы для сеньоров 55+',
        description: `
            <p>Танцевальный стаж 22 года, опыт преподавания 9 лет.</p>
            <p>5 лет в городе Котлас Архангельской области и 4 года в Липецке.</p>
            <p>Коллектив "Сеньоры" в "Тропикане" — постоянные участники фестивалей творчества города Липецк.</p>
            <ul>
                <li>Постоянные участники благотворительной акции-концерта «Поможем своим»</li>
                <li>Регулярно выступают в парках города, санаториях и библиотеках</li>
                <li>Участники ежегодной международной патриотической акции «Синий платочек»</li>
                <li>Участники областного фестиваля "Серебряные парки"</li>
                <li>Участники фестиваля трайбл-культуры и танцев народов мира «Ритмы планеты»</li>
            </ul>
        `,
        image: './img/teacher-4.jpeg'
    },
    {
        id: 5,
        name: 'Никулина Анна',
        prof: 'Преподаватель восточного танца и ОФП',
        description: `
            <p>Танцевальный опыт более 11 лет, стаж преподавания более 3 лет.</p>
            <p>Преподаёт ОФП, включая гимнастику, растяжку, акробатику, основы классического, народного и эстрадного танцев.</p>
            <p>Многократная победительница международных и межрегиональных конкурсов, чемпионка России с 2016 по 2021 год.</p>
        `,
        image: './img/teacher-1.jpg'
    }
];



const swiperWrapper = document.querySelector('.mentor-wrapper__swiper');
const catalogWrapper = document.querySelector('.mentor-catalog__wrapper');


// Перебор массива и добавление каждого элемента
mentorsData.forEach(mentor => {
    // Создаем новый слайд
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    // Добавляем содержимое для карточки
    slide.innerHTML = `
        <div class="list__card modal-big__open">
            <img src="${mentor.image}" alt="${mentor.name}">
            <div class="list__card-box">
                <h3>${mentor.name}</h3>
                <p>${mentor.prof}</p>
            </div>
        </div>
    `;

    // Добавляем новый слайд в обертку слайдов
    swiperWrapper.appendChild(slide);
});

// Если требуется обновить Swiper после добавления слайдов
// if (swiper && swiper.update) {
//     swiper.update(); // Обновляем слайдер для отображения новых слайдов
// }





const modalBig = document.querySelector('.modal-big');
const modalClose = document.querySelector('.modal__close');
const modalImg = modalBig.querySelector('img');
const modalTitle = modalBig.querySelector('h3');
const modalProf = modalBig.querySelector('h4');
const modalDescription = modalBig.querySelector('.modal-big__description');

// Функция для открытия модального окна и заполнения его данными
function openModal(mentor) {
    // Добавляем класс active для открытия модального окна
    modalBig.classList.add('active');

    // Заполняем модальное окно данными
    modalImg.src = mentor.image;
    modalImg.alt = mentor.name;
    modalTitle.textContent = mentor.name;
    modalProf.textContent = mentor.prof;
    modalDescription.innerHTML = mentor.description;
}

// Функция для закрытия модального окна
function closeModal() {
    modalBig.classList.remove('active');
}

// Добавляем обработчик клика для каждой карточки
document.querySelectorAll('.modal-big__open').forEach((card, index) => {
    card.addEventListener('click', () => {
        const mentor = mentorsData[index];
        openModal(mentor); // Открываем модальное окно с данными выбранного наставника
    });
});

// Обработчик для закрытия модального окна при клике на кнопку закрытия
modalClose.addEventListener('click', closeModal);

// Обработчик для закрытия модального окна при клике вне модального контента
modalBig.addEventListener('click', (event) => {
    if (event.target === modalBig) {
        closeModal();
    }
});

