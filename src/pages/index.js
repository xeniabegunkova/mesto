import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
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

//класс Api

export const api = new API(installation.url, installation.token);

/*промисы*/
Promise.all([
    api.getUserData(),
    api.getInitialCards(),
])
    .then(([data, initialCards]) => {
        userInfo.setUserAvatar(data);
        userInfo.setUserId(data);
        userInfo.setUserInfo(data);

        cards.renderItems(initialCards);
    })
    .catch((err) => {
        console.log(err);
    })

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
    nameSelector: '.profile__name',
    aboutSelector: '.profile__career',
    imageSelector: '.profile__image'
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
        cards.addItemAppend(createdCard);
    }
}, photosList
);

/*получаем карточки*/

/*api.getInitialCards()
    .then((items) => {
        cards.renderItems(items)
    })
    .catch((err) => {
        console.log(err);
    })

/*получаем данные о пользователе*/

/*api.getUserData()
    .then((data) => {
        userInfo.setUserId(data);
        userInfo.setUserInfo({
            userName: data.name,
            career: data.about,
        })
        userInfo.setUserAvatar(data)
    })
    .catch((err) => {
        console.log(err);
    })


/*добавление новой карточки*/

const createCard = (item) => {
    const userId = userInfo.takeUserId();
    const card = new Card(item, cardTemplate, handleCardClick, userId, handleDeleteCard, {
        handleSetLike: () => {
            api.likeCard(item._id)
                .then((res) => {
                    card.activeLike();
                    card.likesCount(res.likes);
                })
        },
        handleDeleteLike: () => {
            api.nolikeCard(item._id)
                .then((res) => {
                    card.noLike();
                    card.likesCount(res.likes);
                })
        }
    });
    const createdCard = card.generateCard();

    return createdCard;
}

/*handleLikeCard*/

/*handleDeleteCard*/
const handleDeleteCard = (id, element) => {
    popupWithConfirmation.open(id, element)
}

/*handleCardClick*/

const handleCardClick = (name, link) => {
    popupWithImage.open(name, link);
}


/*addCard*/
const popupAddCard = '#change-card-popup';

const popupWithAddCardsForm = new PopupWithForm({
    selector: popupAddCard,
    callbackSubmitForm: (e, cardData) => {
        e.preventDefault();
        popupWithAddCardsForm.renderLoading(true);
        api.createСard(cardData)
            .then((data) => {
                const createdCard = createCard(data)
                cards.addItemPrepend(createdCard);
                popupWithAddCardsForm.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupWithAddCardsForm.renderLoading(false);
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
const popupEdit = '#change-profile-popup';

const popupWithEditForm = new PopupWithForm({
    selector: popupEdit,
    callbackSubmitForm: (e, data) => {
        e.preventDefault();
        popupWithEditForm.renderLoading(true);
        api.setUserData(data)
            .then((data) => {
                userInfo.setUserInfo(data);
                popupWithEditForm.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupWithEditForm.renderLoading(false);
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

const popupAvatarChange = '.popup_change-avatar'

const popupWithAvatar = new PopupWithForm({
    selector: popupAvatarChange,
    callbackSubmitForm: (e, avatarData) => {
        e.preventDefault();
        popupWithAvatar.renderLoading(true);
        api.setAvatar(avatarData)
            .then((data) => {
                userInfo.setUserAvatar(data);
                popupWithAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupWithAvatar.renderLoading(false);
            })
    }
})

popupWithAvatar.setEventListeners();

avatarButton.addEventListener('click', () => {
    popupWithAvatar.open();
    formValidity[popupAvatar].resetValidation();
}
)

/*popupWithDelete*/

const popupDelete = '.popup_delete_card'

const popupWithConfirmation = new PopupWithConfirmation({
    selector: popupDelete,
    callbackSubmitForm: (id, element) => {
        api.deleteCard(id)
            .then(() => {
                cards.removeCards(element);
                popupWithConfirmation.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }
});

popupWithConfirmation.setEventListeners();

enableValidation();