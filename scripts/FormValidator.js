export class FormValidator {
    constructor(installation, formSelector) {
        this._formSelector = formSelector;
        this.inputSelector = installation.inputSelector;
        this.fieldSetElement = installation.fieldSetElement;
        this.inactiveButtonClass = installation.inactiveButtonClass;
        this.inputErrorClass = installation.inputErrorClass;
        this.errorClass = installation.errorClass;
        this.errorSelector = installation.errorSelector;
        this.frErrorSelector = installation.frErrorSelector;
        this.submitButtonSelector = installation.submitButtonSelector;

        this.inputList = Array.from(this._formSelector.querySelectorAll(this.inputSelector));
        this.buttonEl = this._formSelector.querySelector(this.submitButtonSelector);
    }

    resetValidation() {
        this._toggleButtonState();

        this.inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }
    
    /*Проверка валидности полей.*/
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    /* Проверка валидности полей.*/

    _hasInvalidInput() {
        return this.inputList.some(inputElement => {
            return !inputElement.validity.valid;
        });
    };

    /*Ошибка видна.*/

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formSelector.querySelector(`.${inputElement.id}${this.frErrorSelector}`);
        inputElement.classList.add(this.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.errorClass);
    };

    /*Ошибка скрыта.*/

    _hideInputError(inputElement) {
        const errorElement = this._formSelector.querySelector(`.${inputElement.id}${this.frErrorSelector}`);
        inputElement.classList.remove(this.inputErrorClass);
        errorElement.classList.remove(this.errorClass);
        errorElement.textContent = '';
    };

    /* Работа с кнопками*/
    _toggleButtonState() {

        if (this._hasInvalidInput()) {
            this.buttonEl.classList.add(this.inactiveButtonClass);
            this.buttonEl.disabled = true;
        } else {
            this.buttonEl.classList.remove(this.inactiveButtonClass);
            this.buttonEl.disabled = false;
        }
    };

    /*Добавляем setEventListeners. Яндес тренажер. Задание 4*/

    _setEventListeners() {
        this._toggleButtonState(this.inputList);
        this.inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    /*активация валидации*/

    enableValidation() {
        this._setEventListeners();
    }
}


