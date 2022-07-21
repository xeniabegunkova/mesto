import './index.css';

import { initialCards } from '../components/cards.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

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
const titleEditElement = document.querySelector('.profile__name');
const nameEditElement = document.querySelector('.popup__input_sign_name');
const careerEditElemnt = document.querySelector('.profile__career');
const workEditElement = document.querySelector('.popup__input_sign_extra');
const editForm = document.querySelector('#editForm');
const popupEditProfileName = editForm.getAttribute('name');

/*for addButtoon*/
const popupAddButton = document.querySelector('.profile__add-button');
const formAddСard = document.querySelector('#popup-form-card');
const popupAddCardName = formAddСard.getAttribute('name');

/*add cards*/
const photosList = document.querySelector('.photos__list');

/*для Кард.джс*/

const cardTemplate = '#photos-template';

/*UserInfo class*/

const userInfo = new UserInfo(titleEditElement, careerEditElemnt);

/*editForm*/

const popupEditProfile = '#change-profile-popup'

const popupWithEditForm = new PopupWithForm({
    selector: popupEditProfile,
    callbackSubmitForm: (formData) => {
        userInfo.setUserInfo(formData)
        popupWithEditForm.close();
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
        const createdCard = createCard(formData)
        cards.addItem(createdCard);
        popupWithAddCardsForm.close();
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
        const createdCard = createCard(item);;
        cards.addItem(createdCard);
    }
}, photosList
);

//создаем экземпляр карточки, чтобы не дублировался код

const createCard = (item) => {
    const card = new Card(item, cardTemplate, handleCardClick);
    const createdCard = card.generateCard();

    return createdCard;
}

cards.renderItems();

enableValidation();