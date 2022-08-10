export const installation = {
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

/*редактирование профиля*/
export const editButton = document.querySelector('.profile__edit-button');
export const nameEditElement = document.querySelector('.popup__input_sign_name');
export const workEditElement = document.querySelector('.popup__input_sign_extra');
export const editForm = document.querySelector('#editForm');
export const popupEditProfileName = editForm.getAttribute('name');

/*добавление карточек*/

export const popupAddButton = document.querySelector('.profile__add-button');
export const formAddСard = document.querySelector('#popup-form-card');
export const popupAddCardName = formAddСard.getAttribute('name');

export const photosList = document.querySelector('.photos__list');

export const cardTemplate = '#photos-template';

/* нужные */

export const popupItem = '.popup_item';
export const popupAddCard = '#change-card-popup';
export const popupEdit = '#change-profile-popup';
export const popupDelete = '.popup_delete_card'

/*аватар*/

export const avatarForm = document.querySelector('#changePopupForm');
export const avatarButton = document.querySelector('.profile__avatar-redactor');
export const popupAvatar = avatarForm.getAttribute('name');
export const popupAvatarChange = '.popup_change-avatar'

/*карточки*/

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export { initialCards };
