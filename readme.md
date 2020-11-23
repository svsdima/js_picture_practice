# Создаём скрипты для правильной работы сайта.

## Знакомство с проектом и работа с модальными окнами.
При клике на кнопки (заказать, хочу так же): 
Должно вызываться модальное окно (класс popup-design)
При нажатии на крестик или подложку - исчезать.

При клике на кнопки (подробнее об услуге):
Должно вызываться модальное окно (класс popup-consultation)
При нажатии на крестик или подложку - исчезать.

Если пользователь на странице больше 60 секунд - должно появится модальное окно (popup-consultation). При нажатии на крестик или подложку окно исчезает. Никакими действиями не перебивается, но если уже открыто какое-нибудь модальное окно - ничего не происходит.


Т.к. мы уже создавали модальные окна в предыдущем проекте Window, можно этот скрипт перенести в данный проект. 
- Создаю в папке js папку modules
- В папке modules создаю файл modals.js
- Копирую весь код из предыдущего проекта, вставляю в этот и адаптирую

## Ловим_ скролл до конца страницы и модальное окно подарка
При клике на подарок должно появляться модальное окно (popup-gift) и сам подарок полностью исчезает со страницы. При нажатии на крестик или подложку окно исчезает.

- Адаптируем код в modals.js

Если пользователь долистал страницу до конца, но не нажал ни одну кнопку - должно появляться модальное окно (popup-gift) и сам подарок полностью исчезает со страницы. При нажатии на крестик или подложку окно исчезает.

- Адаптируем код в modals.js

## Работа со слайдерами на странице
На первом экране должен быть слайдер. Стрелки не обязательны. Должен перелистываться автоматически с адекватным интервалом. Анимация перелистывания: сверху вниз.

- В папке modules создаю файл sliders.js
- Прописав скрипты не забыть импортировать в main.js