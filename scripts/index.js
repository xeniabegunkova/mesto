/*for editButton*/
const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('#change-profile-popup');
const closeEditButton = document.querySelector('.popup__close');
const titleEditElement = document.querySelector('.profile__name');
const nameEditElement = document.querySelector('.popup__input_sign_name');
const careerEditElemnt = document.querySelector('.profile__career');
const workEditElement = document.querySelector('.popup__input_sign_extra');
const formEditCard = document.querySelector('.popup__form');
/*for addButtoon*/
const popupAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('#change-card-popup');
const closeAddButton = document.querySelector('#close-button')
/*const appellationAddCard = document.querySelector('.popup__input_sign_appellation');
const linkAddCard = document.querySelector('.popup__input_sign_link'); вроде как не нужны в случае чего дельтануть*/
const formAddСard = document.querySelector('#popup-form-card');
const photoAddButton = document.querySelector('.popup__button');


/*открытие попапа*/
function openPopup(popupElement) {
    popupElement.classList.add('popup_is-open');
};

/*закрытие попапа*/
function closePopup(popupElement) {
    popupElement.classList.remove('popup_is-open');
};


/*editButton*/
editButton.addEventListener('click', function () {
    openPopup(popupEditProfile);
    nameEditElement.value = titleEditElement.textContent;
    workEditElement.value = careerEditElemnt.textContent;
});

closeEditButton.addEventListener('click', () =>
    closePopup(popupEditProfile)
);

formEditCard.addEventListener('submit', function (e) {
    titleEditElement.textContent = nameEditElement.value;
    careerEditElemnt.textContent = workEditElement.value;
    closePopup(popupEditProfile);
    e.preventDefault();
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
/*add cards*/

const photosPart = document.querySelector('.photos');
const photosTemplate = document.querySelector('#photos-template').content;
const photosList = document.querySelector('.photos__list');

function render() {
    initialCards.forEach(renderCard);
}

const renderCard = card => {
    const photosContainer = photosTemplate.querySelector('.photos__container').cloneNode(true);
    
        photosContainer.querySelector('.photos__title').textContent = name;
        photosContainer.querySelector('.photos__grid').src = link;

        photosContainer.setAttribute('alt', `${name}`);
        photosContainer.setAttribute('src', `${link}`);

        photosList.prepend(photosContainer);
    }
        const like = photosContainer.querySelector('.photos__like');
        like.addEventListener('click', () => changeLikeStatus(like));

        const dlt = photosContainer.querySelector('.photos__delete');
        dlt.addEventListener('click'), () => removeCards(dlt);

    const changeLikeStatus = item => {
        like.forEach(function (el) {
            el.addEventListener('click', function (e) {
                e.target.classList.toggle('photos__like_active');
            })
        });
    }
    const removeCards = item => {
        const dlt = document.querySelectorAll('.photos__delete');
        dlt.forEach(function (el) {
            el.addEventListener('click', function (e) {
                const photosPart = e.currentTarget.closest('.photos__container');
                photosPart.remove();
            })
        });
    }
render()

    /*const like = document.querySelectorAll('.photos__like');
    like.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.target.classList.toggle('photos__like_active');
        })
    });
    
    const dlt = document.querySelectorAll('.photos__delete');
    dlt.forEach(function (el) {
        el.addEventListener('click', function (e) {
            const photosPart = e.currentTarget.closest('.photos__container');
            photosPart.remove();
        })
    });

/*СТАРЫЙ ВАРИАНТ*/
/*const photosPart = document.querySelector('.photos');
const photosTemplate = document.querySelector('#photos-template').content;
const photosList = document.querySelector('.photos__list');

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
    /*photosContainer.querySelector('.photos__title').textContent = name;
    photosContainer.querySelector('.photos__grid').src = link;
    photosList.prepend(photosContainer);

    /*удаление карточек*/
/* photosPart.querySelector('.photos__delete').addEventListener('click', e => {
        const photosPart = e.currentTarget.closest('.photos__container');
        photosPart.remove();
    });

    /*лайк*/
    /*photosPart.querySelector('.photos__like').addEventListener('click', function (e) {
        e.target.classList.toggle('photos__like_active');
    });
}
render();
*/
/*добавление новых карточек */
const addCard = document.querySelector('#popup-form-card')
const titleNewCard = document.querySelector('.popup__input_sign_appellation')
const linkNewCard = document.querySelector('.popup__input_sign_link')
addCard.addEventListener('submit', function (e) {
    e.preventDefault();
    const cloneCard = photosTemplate.querySelector('.photos__container').cloneNode(true);
    photosList.prepend(cloneCard);
    const photo = cloneCard.querySelector('.photos__grid');
    photo.src = linkNewCard.value;
    cloneCard.querySelector('.photos__title').textContent = titleNewCard.value;
    cloneCard.querySelector('.photos__like').addEventListener('click', function (e) {
        e.target.classList.toggle('photos__like_active')
    });
    cloneCard.querySelector('.photos__delete').addEventListener('click', e => {
        const photosPart = e.currentTarget.closest('.photos__container');
        photosPart.remove();
    })
    setEventListenerToPhoto(photo);
});

/*open Cards*/
const cards = document.querySelectorAll('.photos__container');
const imageElement = document.querySelector('.popup_item');
const imageClose = document.querySelector('#close-button-item');
const imageContainer = document.querySelector('.popup__content_image');
const popupImage = document.querySelector('.popup__image');
const allPhotos = document.querySelectorAll('.photos__grid');
const photosTitle = document.querySelector('.photos__title');
const imageTitle = document.querySelector('.popup__title-image');

const setEventListenerToPhoto = element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        const image = e.currentTarget.src;
        const card = e.target.closest('.photos__container');
        const title = card.querySelector('.photos__title').textContent;
        
        imageTitle.textContent = title;
        popupImage.src = image;
        imageElement.classList.add('popup_is-open');
        popupImage.className = 'popup__image'; //удаляет все предыдущие классы

        if (popupImage.naturalHeight / popupImage.naturalWidth < 0.8) {
            popupImage.classList.add('popup__image_fullscreen-horizontal-mode');
        } else {
            popupImage.classList.add('popup__image_fullscreen-vertical-mode');
        }

        imageTitle.classList.add('popup__title-image_fullscrean-modificator');
    });
};

Array.from(allPhotos).forEach(photo => {
    setEventListenerToPhoto(photo);
});

imageClose.addEventListener('click', function (e) {
    imageElement.classList.remove('popup_is-open');
    e.preventDefault()
});
