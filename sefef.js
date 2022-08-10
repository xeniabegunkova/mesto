import './index.css';

import { initialCards } from '../components/cards.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithDelete } from '../components/PopupWithDelete';
import { API } from '../components/API';

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

    url: 'https://mesto.nomoreparties.co/v1/cohort-47',
    token: '1f0390ee-bb6f-41bf-98ad-f44b1c220a62',
}

let id = '';

//класс Api

const api = new API(installation.url, installation.token);

//Валидация

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

const userInfo = new UserInfo({
    profileName: '.profile__name',
    profileAbout: '.profile__career',
    popupAvatar: '.popup_change-avatar'
}
);

/*openImages*/

const popupItem = '.popup_item';

const popupWithImage = new PopupWithImage({ selector: popupItem });
popupWithImage.setEventListeners();


/*section*/

const cards = new Section({
    items: [], //пустой айтемз
    renderer: (item) => {
        const createdCard = createCard(item);
        cards.addItem(createdCard);
    }
}, photosList
);

/*получаем карточки*/

api.getInitialCards()
    .then((items) => {
        cards.renderItems(items)
    })
    .catch((err) => {
        console.log(err);
    })

/*получаем данные о пользователе*/

api.getUserData()
    .then((data) => {
        userInfo.setUserInfo({
            userName: data.name,
            career: data.about
        })
        userInfo.setUserAvatar(data.avatar)
    })
    .catch((err) => {
        console.log(err);
    })


/*addCard*/

const popupWithAddCardsForm = new PopupWithForm(formAddСard, {
    handleSubmitForm: (data) => {
        api.createСard(data)
            .then((data) => {
                const createdCard = createCard(data)
                cards.addItem(createdCard);
                popupWithAddCardsForm.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }
})

popupWithAddCardsForm.setEventListeners();


/*open popup CardForm*/

popupAddButton.addEventListener('click', () => {
    popupWithAddCardsForm.open();
    formValidity[popupAddCardName].resetValidation();
})

/*editForm*/

const popupWithEditForm = new PopupWithForm(editForm, {
    handleSubmitForm: (data) => {
        api.setUserData(data)
            .then((res) => {
                userInfo.setUserInfo(res)
                popupWithEditForm.close();
            })
            .catch((err) => {
                console.log(err);
            })
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

/*popup for avatar*/
const popupEditAvatar = document.querySelector('.popup_change-avatar');
const avatarForm = document.querySelector('#changePopupForm');
const avatarButton = document.querySelector('.profile__avatar-redactor');
const popupAvatar = avatarForm.getAttribute('name');

const popupWithAvatar = new PopupWithForm(avatarForm, {
    handleSubmitForm: (data) => {
        api.setAvatar(data)
            .then((res) => {
                userInfo.setUserAvatar(res);
                popupEditAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }
})

popupWithAvatar.setEventListeners();

avatarButton.addEventListener('click', () => {
    popupWithAvatar.open();
    formValidity[popupAvatar].resetValidation();
}
)

/*добавление новой карточки*/

const createCard = (item) => {
    const card = new Card(item, cardTemplate, handleCardClick, id);
    const createdCard = card.generateCard();

    return createdCard;
}


/*handleCardClick*/

const handleCardClick = (name, link) => {
    popupWithImage.open(name, link);
}

/*popupWithDelete*/

const popupDelete = '.popup_delete_card'

const popupWithDelete = new PopupWithDelete({
    popupSelector: popupDelete,
    handleSubmitForm: (data, userId) => {
        api.deleteCard(userId)
            .then(() => {
                cardList.deleteItem(data);
                popupWithDelete.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }
});



/*промисы*/

/*
Promise.all([
    api.getInitialCards(),
    api.getUserData(),
])
    .then(([userData, initialCards]) => {
        id = userData._id;
        userInfo.setUserInfo(userData);
        userInfo.setUserAvatar(userData);
        photosList.renderItems(initialCards);
    })
    .catch((err)=>{
    console.log(err);
})
*/


enableValidation();