import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { API } from '../components/API';
import {
    installation,
    editButton,
    nameEditElement,
    workEditElement,
    editForm,
    popupEditProfileName,
    popupAddButton,
    formAddСard,
    popupAddCardName,
    photosList,
    cardTemplate,
    popupItem,
    popupAddCard,
    popupEdit,
    avatarForm,
    avatarButton,
    popupAvatar,
    popupDelete,
    popupAvatarChange
} from '../constans/utils'

//класс Api

const api = new API(installation.url, installation.token);

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

/*UserInfo class*/

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    aboutSelector: '.profile__career',
    imageSelector: '.profile__image'
}
);

/*openImages*/

const popupWithImage = new PopupWithImage({ selector: popupItem });


/*section*/

const cards = new Section({
    items: [], //пустой айтемз
    renderer: (item) => {
        const createdCard = createCard(item);
        cards.addItemAppend(createdCard);
    }
}, photosList
);

/*добавление новой карточки*/

const createCard = (item) => {
    const userId = userInfo.takeUserId();
    const card = new Card(item, cardTemplate, handleCardClick, userId, handleDeleteCard, {
        handleSetLike: () => {
            api.likeCard(item._id)
                .then((res) => {
                    card.likesCount(res.likes);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    card.activeLike();
                })
        },
        handleDeleteLike: () => {
            api.nolikeCard(item._id)
                .then((res) => {
                    card.likesCount(res.likes);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    card.noLike();
                })
        }
    });
    const createdCard = card.generateCard();

    return createdCard;
}

/*handleDeleteCard*/
const handleDeleteCard = (item) => {
    popupWithConfirmation.open(item)
}

/*handleCardClick*/

const handleCardClick = (name, link) => {
    popupWithImage.open(name, link);
}

/*addCard*/

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

/*editForm*/

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

/*popup for avatar*/

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

/*popupWithDelete*/

const popupWithConfirmation = new PopupWithConfirmation({
    selector: popupDelete,
    callbackSubmitForm: (item) => {
        api.deleteCard(item._id)
            .then(() => {
                item.removeCard();
                popupWithConfirmation.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }
});

/*Добавление обработчиков*/
popupWithImage.setEventListeners();

popupWithAddCardsForm.setEventListeners();

popupWithEditForm.setEventListeners();

popupWithConfirmation.setEventListeners();

popupWithAvatar.setEventListeners();

/*open popup CardForm*/

popupAddButton.addEventListener('click', () => {
    popupWithAddCardsForm.open();
    formValidity[popupAddCardName].resetValidation();
})

/*open popup EditForm*/

editButton.addEventListener('click', () => {
    const userInformation = userInfo.getUserInfo();
    nameEditElement.value = userInformation.name;
    workEditElement.value = userInformation.about;
    formValidity[popupEditProfileName].resetValidation();
    popupWithEditForm.open();
})

/*open popupavatar*/

avatarButton.addEventListener('click', () => {
    popupWithAvatar.open();
    formValidity[popupAvatar].resetValidation();
}
)

enableValidation();