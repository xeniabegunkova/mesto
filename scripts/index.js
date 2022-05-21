const editButton = document.querySelector('.profile__edit-button'); 
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
const titleElement = document.querySelector('.profile__name')
const nameElement = document.querySelector('.popup__input_sign_name');
const careerElemnt = document.querySelector('.profile__career');
const workElement = document.querySelector('.popup__input_sign_work');
const formElement = document.querySelector('.popup__form');

editButton.addEventListener('click', function() {
    popup.classList.add('popup_is-open');
    nameElement.value = titleElement.textContent;
    workElement.value = careerElemnt.textContent;
});


closePopupButton.addEventListener('click', function() {
    popup.classList.remove('popup_is-open');
});

formElement.addEventListener('submit', function(event) {
    console.log(event);
    event.preventDefault()
    titleElement.textContent = nameElement.value;
    careerElemnt.textContent = workElement.value;
})