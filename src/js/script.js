var headerMenu = document.querySelector(".header__menu");
var headerNav = document.querySelector(".header__nav");
var headerBurgerButton = document.querySelector(".header__button");
var headerBurgerIcon = document.querySelector(".header__burger-svg");
var headerCloseBurgerIcon = document.querySelector(".header__close-burger");

var hideMenu = () => {
    headerMenu.classList.add("hide-element-mob");
    headerNav.classList.add("add-padding");
    headerBurgerButton.classList.remove("hide-element");
    headerBurgerButton.classList.add("show-element-only-mob");
};

var onHeaderBurgerBtnClick = (evt) => {
    evt.preventDefault();
    if (headerBurgerIcon.classList.contains("hide-element")) {
        headerBurgerIcon.classList.remove("hide-element");
        headerCloseBurgerIcon.classList.add("hide-element");
        headerNav.classList.add("add-padding");
        headerMenu.classList.add("hide-element-mob");
    }
    else {
        headerBurgerIcon.classList.add("hide-element");
        headerCloseBurgerIcon.classList.remove("hide-element");
        headerNav.classList.remove("add-padding");
        headerMenu.classList.remove("hide-element-mob");
    }
};

hideMenu();

headerBurgerButton.addEventListener("click", onHeaderBurgerBtnClick);

var modalOpenButton = document.querySelector(".Q-A__question-link");
var modalForm = document.querySelector(".modal");
var modalCloseButton = document.querySelector(".modal-close");

var openModal = () => {
    modalForm.classList.remove("modal-write");
};
var closeModal = () => {
    modalForm.classList.add("modal-write");
};

var onCloseBtnClick = (evt) => {
    closeModal();
    removeModalListeners();
};

var onShowBtnClick = (evt) => {
    evt.preventDefault();
    openModal();
    initModalListeners();
};

var onModalKeyDown = (evt) => {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        onCloseBtnClick();
    };
};

var onModalOutLineClick = (evt) => {
    if (evt.target == modalForm) {
        onCloseBtnClick();
    }
};

modalOpenButton.addEventListener("click", onShowBtnClick);

var removeModalListeners = () => {
    modalCloseButton.removeEventListener("click", onCloseBtnClick);
    document.removeEventListener('keydown', onModalKeyDown);
    window.removeEventListener("click", onModalOutLineClick);
};
var initModalListeners = () => {
    modalCloseButton.addEventListener("click", onCloseBtnClick);
    document.addEventListener('keydown', onModalKeyDown);
    window.addEventListener("click", onModalOutLineClick);
};

var questionButtons = document.querySelectorAll(".Q-A__question-button");
var answer = document.querySelector(".answer");
var answers = document.querySelectorAll(".answer");
var questions = document.querySelectorAll(".question");

answer.classList.add("hide-element");

for (let index = 0; index < questionButtons.length; index++) {
    questions[index].classList.add("plus-answer");
    questions[index].classList.remove("plus");
    questionButtons[index].addEventListener('click', (evt) => {
        answers[index].classList.toggle("hide-element");
        questions[index].classList.toggle("plus-answer");
    }
    )
}