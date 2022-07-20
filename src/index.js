import '../pages/index.css'; 

import { initialCards } from '../scripts/cards.js';
import { Card } from '../scripts/Card.js';
import { FormValidator } from '../scripts/FormValidator.js';
import { Section } from '../scripts/Section.js';
import { UserInfo } from '../scripts/UserInfo.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';

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
        formValidity[formName] = validity;
        validity.enableValidation();
    })
}

/*for editButton*/
const editButton = document.querySelector('.profile__edit-button');
//const popupEditProfile = document.querySelector('#change-profile-popup');
const closeEditButton = document.querySelector('.popup__close');
const titleEditElement = document.querySelector('.profile__name');
const nameEditElement = document.querySelector('.popup__input_sign_name');
const careerEditElemnt = document.querySelector('.profile__career');
const workEditElement = document.querySelector('.popup__input_sign_extra');
const popups = document.querySelectorAll('.popup');
const formIncludesToEdit = document.querySelector('.popup__form_includes-to_edit');
const editForm = document.querySelector('#editForm');
const popupEditProfileName = editForm.getAttribute('name');

/*for addButtoon*/
const popupAddButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('#close-button')
const formAddСard = document.querySelector('#popup-form-card');
const popupAddCardName = formAddСard.getAttribute('name');
const photoAddButton = document.querySelector('.popup__button');

/*добавление новых карточек */
const titleNewCard = document.querySelector('.popup__input_sign_appellation');
const linkNewCard = document.querySelector('.popup__input_sign_link');

/*add cards*/
const photosList = document.querySelector('.photos__list');

/*open cards*/

const imageElement = document.querySelector('.popup_item');
const imageClose = document.querySelector('#close-button-item');
const popupImage = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__title-image');

/*для Кард.джс*/

const inputLocality = document.querySelector('.popup__input_sign_appellation');
const inputLink = document.querySelector('.popup__input_sign_link');
const cardTemplate = '#photos-template';


/*UserInfo class*/

const userInfo = new UserInfo(titleEditElement, careerEditElemnt);

/*editForm*/

const popupEditProfile = '#change-profile-popup'

const popupWithEditForm = new PopupWithForm({
    selector: popupEditProfile,
    callbackSubmitForm: (formData) => {
        userInfo.setUserInfo(formData)
    }
});

popupWithEditForm.setEventListeners();

/*open popup EditForm*/

editButton.addEventListener('click', () => {
    const userInformation = userInfo.getUserInfo();
    nameEditElement.value = userInformation.name;
    workEditElement.value = userInformation.about;
    formValidity[popupEditProfileName].resetValidation();
    popupWithEditForm.open();
})

/*addCard*/
const popupAddCard = '#change-card-popup';

const popupWithAddCardsForm = new PopupWithForm({
    selector: popupAddCard,
    callbackSubmitForm: (formData) => {
        const card = new Card(formData, cardTemplate, handleCardClick);
        console.log(formData);
        const createdCard = card.generateCard();
        cards.addItem(createdCard);
    }
})
popupWithAddCardsForm.setEventListeners();

/*open popup CardForm*/

popupAddButton.addEventListener('click', () => {
    popupWithAddCardsForm.open();
    formValidity[popupAddCardName].resetValidation();
})

/*openImages*/

const popupItem = '.popup_item';

const popupWithImage = new PopupWithImage({ selector: popupItem });
popupWithImage.setEventListeners();

/*handleCardClick*/

const handleCardClick = (name, link) => {
    popupWithImage.open(name, link);
}

//уроки 4-5 тренажера

/*Section*/

const cards = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, cardTemplate, handleCardClick);
        const createdCard = card.generateCard();
        cards.addItem(createdCard);

        //return cards
    }
}, photosList
);

cards.renderItems();

enableValidation();