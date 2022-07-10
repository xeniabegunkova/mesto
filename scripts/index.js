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

/*for editButton*/
const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('#change-profile-popup');
const closeEditButton = document.querySelector('.popup__close');
const titleEditElement = document.querySelector('.profile__name');
const nameEditElement = document.querySelector('.popup__input_sign_name');
const careerEditElemnt = document.querySelector('.profile__career');
const workEditElement = document.querySelector('.popup__input_sign_extra');
const formEditProfile = document.querySelector('.popup__form');
const popups = document.querySelectorAll('.popup');
const formIncludesToEdit = document.querySelector('.popup__form_includes-to_edit');
const editForm = document.querySelector('#editForm');

/*for addButtoon*/
const popupAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('#change-card-popup');
const closeAddButton = document.querySelector('#close-button')
const formAddСard = document.querySelector('#popup-form-card');
const photoAddButton = document.querySelector('.popup__button');

/*добавление новых карточек */
const titleNewCard = document.querySelector('.popup__input_sign_appellation');
const linkNewCard = document.querySelector('.popup__input_sign_link');

/*add cards*/

const photosPart = document.querySelector('.photos');
const photosTemplate = document.querySelector('#photos-template').content;
const photosList = document.querySelector('.photos__list');

/*open cards*/

const cards = document.querySelectorAll('.photos__container');
const imageElement = document.querySelector('.popup_item');
const imageClose = document.querySelector('#close-button-item');
const imageContainer = document.querySelector('.popup__content_image');
const popupImage = document.querySelector('.popup__image');
const allPhotos = document.querySelectorAll('.photos__grid');
const photosTitle = document.querySelector('.photos__title');
const imageTitle = document.querySelector('.popup__title-image');

/*для Кард.джс*/

const inputLocality = document.querySelector('.popup__input_sign_appellation');
const inputLink = document.querySelector('.popup__input_sign_link');
const cardTemplate = '#photos-template';

/*открытие попапа*/

function openPopup(popupElement) {
    popupElement.classList.add('popup_is-open');
    escapeKeyAdd();
    closeOverlayAdd();
};

/*закрытие попапа*/

function closePopup(popupElement) {
    popupElement.classList.remove('popup_is-open');
    escapeKeyRemove();
    closeOverlayRemove();
};

/*обработка нажатия на клавишу*/
const escapeKey = e => {
    if (e.key === 'Escape') {
        popups.forEach(closePopup);
    }
};

const escapeKeyRemove = () => {
    document.removeEventListener('keydown', escapeKey);
};

const escapeKeyAdd = () => {
    document.addEventListener('keydown', escapeKey);
};

/*обратока на экран*/

const closeOverlay = e => {
    if (e.target.classList.contains('popup')) {
        popups.forEach(closePopup);
    };
};

const closeOverlayAdd = () => {
    document.addEventListener('click', closeOverlay);
}

const closeOverlayRemove = () => {
    document.removeEventListener('click', closeOverlay);
}

/*editButton*/

editButton.addEventListener('click', function () {
    const validator = new FormValidator(installation, editForm);
    validator.enableValidation();
    openPopup(popupEditProfile);
    nameEditElement.value = titleEditElement.textContent;
    workEditElement.value = careerEditElemnt.textContent;
});

closeEditButton.addEventListener('click', () =>
    closePopup(popupEditProfile)
);

formEditProfile.addEventListener('submit', function (e) {
    e.preventDefault();
    titleEditElement.textContent = nameEditElement.value;
    careerEditElemnt.textContent = workEditElement.value;
    closePopup(popupEditProfile);
});

/*addButton*/

popupAddButton.addEventListener('click', () => {
    const validator = new FormValidator(installation, formAddСard);
    validator.enableValidation();
    openPopup(popupAddCard)
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

const render = (information) => {
    const card = new Card(information, cardTemplate, openPhoto);
    const createdCard = card.generateCard();
    addCardToContainer(createdCard);

    return createdCard;
};

/*open card with help of popup*/

const openPhoto = (name, link) => {
    popupImage.alt = name;
    popupImage.src = link;

    imageTitle.textContent = name;
    openPopup(imageElement);
};

initialCards.forEach((card) => { render(card) });

/*add new cards*/

formAddСard.addEventListener('submit', function (e) {
    e.preventDefault();
    const newCard = { name: titleNewCard.value, link: linkNewCard.value };
    render(newCard);
    formAddСard.reset();
    const btnSubmitAddCard = formAddСard.querySelector(".popup__button");
    btnSubmitAddCard.classList.add('popup__button_inactive');
    btnSubmitAddCard.setAttribute('disabled', true);
    closePopup(popupAddCard);
}); 