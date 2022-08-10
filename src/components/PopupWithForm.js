import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({ selector, callbackSubmitForm }) {
        super({ selector }); //наслудует от класса Попап: слушатели событий, открытие, закрытие
        this._callbackSubmitForm = callbackSubmitForm;

        this._popupForm = this.popup.querySelector('.popup__form'); //ищем форму попапа для сбрасывания
        this._popupInput = Array.from(this.popup.querySelectorAll('.popup__input')); // ищем данные ВСЕХ полей

        this._buttonWait = this._popupForm.querySelector('.popup__button-wait');
        this._buttonWaitText = this._buttonWait.textContent;

        this.renderLoading = this.renderLoading.bind(this);
    }

    _getInputValues() {
        this._inputValues = {}; //объявляем новый объект
        this._popupInput.forEach((input) => { //перебираем инпуты
            const value = input.value;
            const inputName = input.name;
            this._inputValues[inputName] = value;
        })
        return this._inputValues;
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._buttonWait.textContent = 'Сохранение...';
        }
        else {
            this._buttonWait.textContent = this._buttonWaitText;
        }
    }

    close() {
        super.close(); //копируем закрытие из класса попап
        this._popupForm.reset(); //делаем ресет формы
    }

    setEventListeners() {
        super.setEventListeners(); //копируем слушатели из класса попап
        this._popupForm.addEventListener('submit', (e) => {
            this._callbackSubmitForm(e, this._getInputValues());
        })
    }
}
