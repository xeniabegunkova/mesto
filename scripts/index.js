/*for editButton*/
const editButton = document.querySelector('.profile__edit-button'); 
const popupProfile = document.querySelector('#change-profile-popup');
const closePopupButton = document.querySelector('.popup__close');
const titleElement = document.querySelector('.profile__name');
const nameElement = document.querySelector('.popup__input_sign_name');
const careerElemnt = document.querySelector('.profile__career');
const workElement = document.querySelector('.popup__input_sign_extra');
const formElement = document.querySelector('.popup__form');

/*for addButtoon*/
const addButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('#change-card-popup');
const closeButton = document.querySelector('#close-button')
const appellationCard = document.querySelector('.popup__input_sign_appellation');
const linkCard = document.querySelector('.popup__input_sign_link');
const formElementСard = document.querySelector('#card-title'); 
const photoGrid = document.querySelector('.photos__grid');
const photoTitle = document.querySelector('.photos__title');
const photoAddButton = document.querySelector('.popup__button');

/*editButton*/

editButton.addEventListener('click', function() {
    popupProfile.classList.add('popup_is-open');
    nameElement.value = titleElement.textContent;
    workElement.value = careerElemnt.textContent;
    e.preventDefault()
});

closePopupButton.addEventListener('click', function() {
    popupProfile.classList.remove('popup_is-open');
    e.preventDefault()
});

formElement.addEventListener('submit', function(event) {
    titleElement.textContent = nameElement.value;
    careerElemnt.textContent = workElement.value;
    popupProfile.classList.remove('popup_is-open');
    e.preventDefault();
})

/*addButton*/

addButton.addEventListener('click', function() {
    popupCard.classList.add('popup_is-open');
    e.preventDefault()
});

closeButton.addEventListener('click', function() {
    popupCard.classList.remove('popup_is-open');
    e.preventDefault()
});

formElementСard.addEventListener('submit', function(event) {
    popupCard.classList.remove('popup_is-open');
    e.preventDefault()
})

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
const photosList = document.querySelector('.photos__list');
const photosContainer = document.querySelector('.photos__container');
const photosTemplate = document.querySelector('#photos-template').content;

const photosInformation = initialCards.map(function (item) {
    return {
        name: item.name,
        link: item.link
    }
});

function render() {
    photosInformation.forEach(renderCard);
}

function renderCard({ name, link }) {
    const photosContainer = photosTemplate.querySelector('.photos__container').cloneNode(true); /*практикум тренажер (там где фильмы)*/
    photosContainer.querySelector('.photos__title').textContent = name;
    photosContainer.querySelector('.photos__grid').src = link;
    photosList.prepend(photosContainer);
    
    /*добавление карточек*/

    const createCardElem = (title, link) => {
        const cardElem = photosTemplate.content.querySelector('.photos__container').cloneNode(true);

        cardElem.querySelector('.photos__grid').setAttribute('src', `$(link)`);
        cardElem.querySelector('.photos__grid').setAttribute('alt', `$(title))`);
        cardElem.querySelector('.photos__title').textContent = title;

        addCardListeners(cardElem);

        return cardElem;
    }

    const addCard = (title, link) => {
    const cardElem = createCardElement (title, link);
    photosContainer.prepend(cardElem);
    };
    
    const photoAddButton = e => {
        e.preventDefault();
        const title = popup__input_sign_appellation.value;
        const link = popup__input_sign_link.value;
    };

    /*удаление карточек*/
    photosPart.querySelector('.photos__delete').addEventListener('click', e => {
        const photosPart = e.currentTarget.closest('.photos__container');
        photosPart.remove();
    });

    /*лайк*/
    photosPart.querySelector('.photos__like').addEventListener('click', function (e) {
        e.target.classList.toggle('photos__like_active');
    });
}

render();



