let buttonMenu;
let menuBody;
let title_list1;
let arrow;
let menuLinks;

function init() {
    buttonMenu = document.querySelector('.header__button');
    menuBody = document.querySelector('.menu');
    if (buttonMenu) {
        buttonMenu.addEventListener("click", onMenuClick)
    }

    window.addEventListener('scroll', handleWindowScroll);

    title_list1 = document.querySelector('.sightseens');
    arrow = document.querySelector('.welcome__arrow');

    arrow.addEventListener("click", handleButtonClick);

    menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });
    }
}

window.addEventListener("DOMContentLoaded", init);

function onMenuClick(e) {
    arrow.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    buttonMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
}

function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - 200;

        if (buttonMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            buttonMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            arrow.classList.remove('_active');
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}

function handleButtonClick() {
    title_list1.scrollIntoView({ block: "start", behavior: "smooth" });
}

function handleWindowScroll() {
    const header = document.querySelector('.header');
    if (header) {
        let scrolled = window.pageYOffset;
        if (scrolled >= 10) {
            header.classList.add('_active');
        }
        if (scrolled < 10) {
            header.classList.remove('_active');
        }
    };
}
