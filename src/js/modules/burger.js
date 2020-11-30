const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
          burgerElem = document.querySelector(burgerSelector);

    menuElem.style.display = "none";

    /* Открытие бургера */
    burgerElem.addEventListener('click', () => {
        if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
            menuElem.style.display = "block";
        } else {
            menuElem.style.display = "none";
        }
    });

    /* Если человек разворачивает планшет и ширина становится больше - оно скрывается. */
    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElem.style.display = 'none';
        }
    });
};

export default burger;