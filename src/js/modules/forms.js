// import checkNumInputs from './checkNumInputs';
import {postData} from '../services/requests';

/* Работа с формами отправки данных */
const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'), /* Инпут нужен, чтобы очищать инпуты после отправки на сервер */
          upload = document.querySelectorAll('[name="upload"]');

    // checkNumInputs('input[name="user_phone"]');

    /* Оповещения */
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failury: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    /* Пути по которым отправляем данные */
    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    }

    /* Очищаем инпуты */
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        });
    };

    /* Условие на проверку длины названия изображения и если оно слишком длинное, название укорачивается */
    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);
            let dots;
            const arr = item.files[0].name.split('.');

            arr[0].length > 10 ? dots = "..." : dots = '.';
            const name = item.files[0].name.split('.')[0].substring(0, 10) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    /* Форма отправки данных без перезагрузки страницы */
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            /* Оповещение пользователя */
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage); /* Помещаем блок в конец формы */

            /* Анимация скрытия формы */
            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            /* Добавление спиннера на место формы */
            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            /* Текст загрузки */
            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            /* Собираем все данные формы */
            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            /* Отправляем запрос на сервер с данными, которые были получены */
            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failury;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });
}

export default forms;