const editButton = document.querySelector('.profile__edit-button'); 
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');


//console.log(editButton);
//console.log(popup);
console.log(closePopupButton);


editButton.addEventListener('click', function() {
    popup.classList.add('popup__isOpen');
});


closePopupButton.addEventListener('click', function() {
    popup.classList.remove('popup__isOpen');
});
