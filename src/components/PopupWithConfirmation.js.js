import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup {
    constructor({ selector, callbackSubmitForm }) {
        super({ selector });
        this._callbackSubmitForm = callbackSubmitForm;

        this._popupForm = this.popup.querySelector('.popup__form');
    }

    open(item) {
        this.item = item;
        console.log(this.item)
        super.open();
    }


    setEventListeners() {
        super.setEventListeners(); // копируем слушатели событий из класса попап
        this._popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this._callbackSubmitForm(this.item)
        })
    }
}