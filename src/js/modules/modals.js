/* Работа с модальными окнами */
const modals = () => {
    /* Привязка модального окна к триггеру */
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll;


        /* При клике на триггер, открывается модальное окно */
        /* forEach существует, если использовался querySelectorAll */
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                /* Сбрасываем стандартное поведение */
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                /* Включаем отображение окна */
                modal.style.display = 'block';
                /* Отключаем скроллинг страницы при вызове окна */
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open');
            });
        });

        /* При клике на крестик, закрываем модальное окно */
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            /* Отключаем отображение окна */
            modal.style.display = 'none';
            /* Включаем скроллинг страницы при закрытии окна */
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        /* При клике в тёмную область (за границей модального окна), модальное окно будет закрываться */
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                /* Отключаем отображение окна */
                modal.style.display = 'none';
                /* Включаем скроллинг страницы при закрытии окна */
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }

    /* Показываем модальное окно спустя определённый промежуток времени */
    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;
            /* При уже открытом модальном окне, другие окна не всплывают */
            document.querySelectorAll('[data-modal').forEach(item => {
                /* Если модальное окно, которое перебирается что-то показывает, то... */
                if (getComputedStyle(item).display !== 'none') {
                    display = "block";
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                /* Отключаем скроллинг страницы при вызове окна */
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            }
            
        }, time);
    }

    /* Убираем прыжок страницы из-за скролла */
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        /* Вычисляем размер прокрутки */
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    /* Включаем скрипт не забывая прописывать селекторы */
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

    // showModalByTime('.popup-consultation', 60000);
};


export default modals;