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

/*for addButtoon*/
const popupAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('#change-card-popup');
const closeAddButton = document.querySelector('#close-button')
const formAddСard = document.querySelector('#popup-form-card');
const photoAddButton = document.querySelector('.popup__button');

/*добавление новых карточек */
const addCard = document.querySelector('#popup-form-card');
const titleNewCard = document.querySelector('.popup__input_sign_appellation');
const linkNewCard = document.querySelector('.popup__input_sign_link');

/*cards*/

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

popupAddButton.addEventListener('click', () =>
    openPopup(popupAddCard)
);

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
const addCardToContainer = (photosContainer) => {
    photosList.prepend(photosContainer);
}

function render(card) {
    const createdCard = renderCard(card);
    addCardToContainer(createdCard);
};

/*создаем карточку*/
const renderCard = (card) => {
    const photosContainer = photosTemplate
        .querySelector(".photos__container")
        .cloneNode(true);

    const image = photosContainer.querySelector(".photos__grid");

    photosContainer.querySelector(".photos__title").textContent = card.name;
    image.src = card.link;

    image.setAttribute("alt", `${card.name}`);
    image.setAttribute("src", `${card.link}`);

    image.addEventListener('click', openPhoto);

    const like = photosContainer.querySelector(".photos__like");
    like.addEventListener("click", () => changeLikeStatus(like));

    const dlt = photosContainer.querySelector(".photos__delete");
    dlt.addEventListener("click", () => removeCard(dlt));

    return photosContainer;
};

const changeLikeStatus = (item) => {
    item.classList.toggle('photos__like_active');
};

const removeCard = (item) => {
    const photosPart = item.closest('.photos__container');
    photosPart.remove();
};

const openPhoto = e => {
    e.preventDefault();
    const image = e.currentTarget.src;
    const card = e.target.closest('.photos__container');
    const title = card.querySelector('.photos__title').textContent;

    popupImage.alt = title;
    popupImage.src = image;

    imageTitle.textContent = title;
    openPopup(imageElement);
};

initialCards.forEach((card) => { render(card) });

/*add new cards*/

addCard.addEventListener('submit', function (e) {
    e.preventDefault();
    const newCard = { name: titleNewCard.value, link: linkNewCard.value };
    const createdCard = renderCard(newCard);
    addCardToContainer(createdCard);
    formAddСard.reset();
    const btnSubmitAddCard = formAddСard.querySelector(".popup__button");
    btnSubmitAddCard.classList.add('popup__button_inactive');
    btnSubmitAddCard.setAttribute('disabled', true);
});