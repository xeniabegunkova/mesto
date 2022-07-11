import { initialCards } from './cards.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const installation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    fieldSetElement: '.popup__fieldset',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_error-active',
    errorSelector: '.popup__input-error',
    frErrorSelector: '-input-error',
}

const formValidity = {};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(installation.formSelector));
    formList.forEach((formElement) => {
        const validity = new FormValidator(installation, formElement);
        const formName = formElement.getAttribute('name');
        console.log(formValidity);
        formValidity[formName] = validity;
        validity.enableValidation();
    })
}

/*for editButton*/
const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('#change-profile-popup');
const closeEditButton = document.querySelector('.popup__close');
const titleEditElement = document.querySelector('.profile__name');
const nameEditElement = document.querySelector('.popup__input_sign_name');
const careerEditElemnt = document.querySelector('.profile__career');
const workEditElement = document.querySelector('.popup__input_sign_extra');
//const formValidity = document.querySelector('.popup__form');
const popups = document.querySelectorAll('.popup');
const formIncludesToEdit = document.querySelector('.popup__form_includes-to_edit');
//const popupEditProfileName = formIncludesToEdit.getAttribute('name'); 
const editForm = document.querySelector('#editForm');
const popupEditProfileName = editForm.getAttribute('name'); 

/*for addButtoon*/
const popupAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('#change-card-popup');
const closeAddButton = document.querySelector('#close-button')
const formAddСard = document.querySelector('#popup-form-card');
const popupAddCardName = formAddСard.getAttribute('name');
const photoAddButton = document.querySelector('.popup__button');

/*добавление новых карточек */
const titleNewCard = document.querySelector('.popup__input_sign_appellation');
const linkNewCard = document.querySelector('.popup__input_sign_link');

/*add cards*/

/*const photosPart = document.querySelector('.photos');
const photosTemplate = document.querySelector('#photos-template').content;*/
const photosList = document.querySelector('.photos__list');

/*open cards*/

//const cards = document.querySelectorAll('.photos__container');
const imageElement = document.querySelector('.popup_item');
const imageClose = document.querySelector('#close-button-item');
//const imageContainer = document.querySelector('.popup__content_image');
const popupImage = document.querySelector('.popup__image');
//const allPhotos = document.querySelectorAll('.photos__grid');
//const photosTitle = document.querySelector('.photos__title');
const imageTitle = document.querySelector('.popup__title-image');

/*для Кард.джс*/

const inputLocality = document.querySelector('.popup__input_sign_appellation');
const inputLink = document.querySelector('.popup__input_sign_link');
const cardTemplate = '#photos-template';

/*открытие попапа*/

function openPopup(popupElement) {
    popupElement.classList.add('popup_is-open');
    document.addEventListener('keydown', closeEscape);
};

/*закрытие попапа*/

function closePopup(popupElement) {
    popupElement.classList.remove('popup_is-open');
};

/*обработка нажатия на клавишу*/

function closeEscape(e) {
    if (e.key == 'Escape') {
        const el = document.querySelector('.popup_is-open')
        closePopup(el)
    }
}

/*обратока на экран*/

popups.forEach((el) => {
    el.addEventListener('mousedown', (e) => {
        const container = el.querySelector('.popup__content')
        const click = e.composedPath().includes(container)
        if (!click) {
            closePopup(el)
        }
    })
})

/*editButton*/

editButton.addEventListener('click', function () {
    openPopup(popupEditProfile);
    nameEditElement.value = titleEditElement.textContent;
    workEditElement.value = careerEditElemnt.textContent;
    formValidity[popupEditProfileName].resetValidation();
});

closeEditButton.addEventListener('click', () =>
    closePopup(popupEditProfile)
);

editForm.addEventListener('submit', function (e) {
    e.preventDefault();
    titleEditElement.textContent = nameEditElement.value;
    careerEditElemnt.textContent = workEditElement.value;
    closePopup(popupEditProfile);
});

/*addButton*/

popupAddButton.addEventListener('click', function () {
    openPopup(popupAddCard);
    formValidity[popupAddCardName].resetValidation();
});

closeAddButton.addEventListener('click', () =>
    closePopup(popupAddCard)
);

formAddСard.addEventListener('submit', () =>
    closePopup(popupAddCard)
);

/*сlose Card*/

imageClose.addEventListener('click', function (e) {
    closePopup(imageElement)
});

/*add cards*/
/*добавляет карточку в контейнер */
const information = {
    name: inputLocality.value,
    link: inputLink.value
}

const addCardToContainer = (createdCard) => {
    photosList.prepend(createdCard);
}

const createCard = (information) => {
    const card = new Card(information, cardTemplate, openPhoto);
    const createdCard = card.generateCard();

    return createdCard;
};

/*open card with help of popup*/

const openPhoto = (name, link) => {
    popupImage.alt = name;
    popupImage.src = link;

    imageTitle.textContent = name;
    openPopup(imageElement);
};

initialCards.forEach((card) => { addCardToContainer(createCard(card)); });
enableValidation();

/*add new cards*/

formAddСard.addEventListener('submit', function (e) {
    e.preventDefault();
    const newCard = { name: titleNewCard.value, link: linkNewCard.value };
    addCardToContainer(createCard(newCard));
    formAddСard.reset();
    closePopup(popupAddCard);
});