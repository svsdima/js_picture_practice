const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1, // Текущий слайд, который показывается пользователю
        paused = false;
    const items = document.querySelectorAll(slides);
          

    /* Перемещение слайд индекса и слайдера */
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        /* Скрыли все слайды */
        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        });

        /* Показываем слайд */
        items[slideIndex - 1].style.display = "block";
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    /* При нажатии на кнопки, слайды переключаются, но если этих кнопок нет в слайде, скрипт не будет ломаться, поэтому использую try, catch() */
    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch(e) {}

    function activateAnimation() {
        /* Проверка: вертикальный слайд или горизонтальный */
        if (dir === 'vertical') {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.add('fadeInDown');
            }, 3000);
        } else {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    activateAnimation();

    /* Проверка. Если пользователь навёл мышкой на слайд, то он перестаёт автоматически переключаться, если убрал мышку, то слайды переключаются. */
    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });

};

export default sliders;