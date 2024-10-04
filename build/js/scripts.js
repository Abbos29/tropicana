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

const heroModal = document.querySelector('.modal');
const heroModalClose = document.querySelectorAll('.modal__close');
const heroModalOpen = document.querySelectorAll('.modal__open');

// Проверяем, есть ли элементы на странице, прежде чем добавлять к ним обработчики событий
if (heroModal && heroModalClose && heroModalOpen.length > 0) {
    heroModalOpen.forEach(btn => {
        btn.addEventListener('click', () => {
            heroModal.classList.add('active');
        });
    });


    heroModalClose.forEach(btn => {
        btn.addEventListener('click', () => {
            heroModal.classList.remove('active');
        });
    })
 

    heroModal.addEventListener('click', (e) => {
        if (!e.target.closest('.modal__wrapper')) {
            heroModal.classList.remove('active');
        }
    });
}



// MENTORS DATA

const mentorsData = [
    {
        id: 1,
        name: 'Раздорских Ольга',
        prof: 'Основатель и руководитель танцевального клуба "Тропикана"',
        description: `
            <p>Танцевальный стаж 36 лет, опыт преподавания 28 лет, опыт судейства конкурсов 10 лет.</p>
            <p>Два высших образования (ЛГПУ и СПб НГУ им. П.Ф. Лесгафта).</p>
            <p>Член Международного Совета по танцу CID UNESCO.</p>
            <p>Танцор международного класса по спортивным бальным танцам, 12-кратная чемпионка России (в разных направлениях).</p>
            <p>Организатор фестивалей "Давайте потанцуем" и "Ритмы планеты".</p>
        `,
        image: '../img/teacher-1.jpg'
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
        image: '../img/teacher-2.jpeg'
    },
    {
        id: 3,
        name: 'Шишкина Юлия',
        prof: 'Судья, педагог, хореограф, профессиональная танцовщица восточного танца',
        description: `
            <p>Ученица Т. П. Дорош, долгое время была солисткой ансамбля "Жемчужина".</p>
            <p>Многократный призёр различных конкурсов и чемпионатов по belly dance по версии ОРТО, IDO, Лиги Профессионалов восточного танца и других организаций.</p>
            <p>Долгое время жила в Москве, успешно преподавала в Московской Международной школе арабского танца, также имела свою школу восточного танца, выступала на самых ярких и престижных площадках Москвы, работала со звёздами российской эстрады.</p>
            <p>Провела более сотни мастер-классов по классическому и фольклорному танцу не только в России, а также в Турции и Китае.</p>
        `,
        image: '../img/teacher-1.jpeg'
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
        image: '../img/teacher-4.jpeg'
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
        image: '../img/teacher-3.jpeg'
    },
    {
        id: 6,
        name: 'Колесникова Ольга',
        prof: 'Хореограф-постановщик Strip dance, инструктор танцевальных и силовых направлений',
        description: `
            <p>Преподавательский стаж в фитнесе — с 2004 года, хореограф-постановщик Strip dance — с 2006 года.</p>
            <p>Занималась в Доме Детского Творчества "Октябрьский", в танцевальном коллективе "Эдельвейс" (солистка). В 2003 году стала его руководителем (1 год).</p>
            <p>Окончила Липецкий Областной Колледж Искусств им. К. Н. Игумнова с красным дипломом по классу Хореографии.</p>
            <p>Работала в фитнес-клубе "Анна" с 2004 года, старший инструктор с 2010 года, инструктор танцевальных и силовых программ в Mio Ballo с 2016 года.</p>
            <p>Инструктор по направлениям: Interval training, FT, Bosu, Step Dance, Power Step, Aero Dance, Strip Dance, Dance Hall, Stretch, Fitball, ABL, Body Condition, Upper Body, Cross Fit, Pump, Go-Go.</p>
            <p>Приоритетное направление — Strip Dance.</p>
        `,
        image: '../img/teacher-6.jpeg'
    },
    {
        id: 7,
        name: 'Душкина Светлана',
        prof: 'Солистка шоу-балета "Тропикана", тренер второго состава шоу-балета',
        description: `
            <p>Танцевальный опыт — 10 лет. Солистка шоу-балета "Тропикана".</p>
            <p>Тренер второго состава шоу-балета по современным направлениям.</p>
        `,
        image: '../img/teacher-7.jpeg'
    },
    {
        id: 8,
        name: 'Раздорских Олег',
        prof: 'Тренер по современным танцевальным направлениям',
        description: `
            <p>Тренер по современным танцевальным направлениям, работает в клубе "Тропикана".</p>
        `,
        image: '../img/teacher-8.jpeg'
    }
];





document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.mentor-wrapper__swiper');
    const catalogWrapper = document.querySelector('.mentor-catalog__wrapper');
    const modalBig = document.querySelector('.modal-big');
    const modalClose = document.querySelector('.modal__close');

    // Проверяем, существует ли swiperWrapper
    if (swiperWrapper) {
        console.log('swiperWrapper найден, добавляем карточки.');

        // Перебор массива и добавление каждого элемента в swiperWrapper
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

        console.log('Карточки успешно добавлены в swiperWrapper.');
    } else {
        console.log('swiperWrapper не найден.');
    }

    // Проверяем, существует ли catalogWrapper
    if (catalogWrapper) {
        console.log('catalogWrapper найден, добавляем карточки.');

        // Перебор массива и добавление каждого элемента в catalogWrapper
        mentorsData.forEach(mentor => {
            // Создаем новую карточку для каталога
            const catalogCard = document.createElement('div');
            catalogCard.classList.add('list__card', 'modal-big__open');

            // Добавляем содержимое для карточки
            catalogCard.innerHTML = `
                <img src="${mentor.image}" alt="${mentor.name}">
                <div class="list__card-box">
                    <h3>${mentor.name}</h3>
                    <p>${mentor.prof}</p>
                </div>
            `;

            // Добавляем новую карточку в обертку каталога
            catalogWrapper.appendChild(catalogCard);
        });

        console.log('Карточки успешно добавлены в catalogWrapper.');
    } else {
        console.log('catalogWrapper не найден.');
    }

    // Проверяем наличие модального окна и элементов управления
    if (modalBig && modalClose) {
        const modalImg = modalBig.querySelector('img');
        const modalTitle = modalBig.querySelector('h3');
        const modalProf = modalBig.querySelector('h4');
        const modalDescription = modalBig.querySelector('.modal-big__description');

        // Функция для открытия модального окна и заполнения его данными
        function openModal(mentor) {
            modalBig.classList.add('active');
            modalImg.src = mentor.image;
            modalImg.alt = mentor.name;
            modalTitle.textContent = mentor.name;
            modalProf.textContent = mentor.prof;
            modalDescription.innerHTML = mentor.description;
        }

        // Функция для закрытия модального окна
        const closeModal = () => {
            modalBig.classList.remove('active');
        }

        // Привязываем обработчики событий к карточкам
        document.querySelectorAll('.modal-big__open').forEach((card, index) => {
            card.addEventListener('click', () => {
                const mentor = mentorsData[index];
                openModal(mentor);
            });
        });

        // Закрытие модального окна при клике на кнопку закрытия
        modalClose.addEventListener('click', closeModal);

        // Закрытие модального окна при клике вне контента модального окна
        modalBig.addEventListener('click', (event) => {
            if (!event.target.closest('.modal__wrapper')) {
                closeModal();
            }
        });
    }

    // Если требуется обновить Swiper после добавления слайдов
    // if (swiper && swiper.update) {
    //     swiper.update(); // Обновляем слайдер для отображения новых слайдов
    // }
});











// TELEGRAM API

document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const phone = this.querySelector('input[name="phone"]').value;
        const name = this.querySelector('input[name="name"]').value;

        const BOT_TOKEN = '7627525530:AAELptBGJwFj22aOM5poXM2XhnGgpFCh8QM';
        const CHAT_ID = '-4555530917';

        const message = `Имя: ${name}\nТелефон: ${phone}`;
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Заявка успешно отправлена!');

                    setTimeout(() => {
                        document.querySelector('.modal').classList.remove('active');
                    }, 1000);

                } else {
                    alert('Ошибка при отправке заявки.');
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Ошибка при отправке заявки.');
            });
    });
});

