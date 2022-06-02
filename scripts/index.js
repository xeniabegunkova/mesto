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
editButton.addEventListener('click', function(e) {
    popupProfile.classList.add('popup_is-open');
    nameElement.value = titleElement.textContent;
    workElement.value = careerElemnt.textContent;
    e.preventDefault()
});

closePopupButton.addEventListener('click', function(e) {
    popupProfile.classList.remove('popup_is-open');
    e.preventDefault()
});

formElement.addEventListener('submit', function(event) {
    titleElement.textContent = nameElement.value;
    careerElemnt.textContent = workElement.value;
    popupProfile.classList.remove('popup_is-open');
    event.preventDefault();
})

/*addButton*/

addButton.addEventListener('click', function(e) {
    popupCard.classList.add('popup_is-open');
    appellationCard.value = photoTitle.textContent;
    linkCard.value = photoGrid.textContent;
    e.preventDefault();
});

closeButton.addEventListener('click', function(e) {
    popupCard.classList.remove('popup_is-open');
    e.preventDefault();
});

formElementСard.addEventListener('submit', function(event) {
    photoTitle.textContent = appellationCard.value;
    photoGrid.textContent = linkCard.value;
    popupCard.classList.remove('popup_is-open');
    event.preventDefault();
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
const photosContainer = document.querySelector('.photos__container');
const photosTemplate = document.querySelector('#photos-template').content;
const photosList =  document.querySelector('.photos__list');

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

/*добавление новых карточек */
const addCard = document.querySelector('#popup-form-card')
    const titleNewCard = document.querySelector('.popup__input_sign_appellation')
    const linkNewCard = document.querySelector('.popup__input_sign_link')
    addCard.addEventListener('submit', function(e) {
        e.preventDefault();
        const cloneCard = photosTemplate.querySelector('.photos__container').cloneNode(true);
        photosList.prepend(cloneCard);
        cloneCard.querySelector('.photos__grid').src = linkNewCard.value;
        cloneCard.querySelector('.photos__title').textContent = titleNewCard.value;
        cloneCard.querySelector('.photos__like').addEventListener('click', function (e) {
            e.target.classList.toggle('photos__like_active')});
        cloneCard.querySelector('.photos__delete').addEventListener('click', e => {
            const photosPart = e.currentTarget.closest('.photos__container');
            photosPart.remove(); });
    });
    



