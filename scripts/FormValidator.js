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

    _resetValidation() {
        console.log('reset');
        //const inputList = (formElement.querySelectorAll(installation.inputSelector));
        const errorList = (this._formSelector.querySelectorAll(this.errorSelector));
        //const buttonEl = (formElement.querySelector(installation.submitButtonSelector));
        for (const inputElement of this.inputList) {
            if (inputElement.classList.contains(this.inputErrorClass)) {
                inputElement.classList.remove(this.inputErrorClass);
            }
        }
        for (const errorElement of errorList) {
            if (errorElement.classList.contains(this.errorClass)) {
                errorElement.classList.remove(this.errorClass);
            }
        }
        if (this.buttonEl.classList.contains(this.inactiveButtonClass)) {
            this.buttonEl.classList.remove(this.inactiveButtonClass);
            this.buttonEl.disabled = false;
        }
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
        inputElement.classList.remove(this.inputErrorClas);
        errorElement.classList.remove(this.errorClass);
        errorElement.textContent = '';
    };

    /* Работа с кнопками*/
    _toggleButtonState() {
        console.log('submit');
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

    /*enableValidation() {
        const formList = Array.from(document.querySelectorAll(this.inputSelector));
        formList.forEach((formElement) => {
            const fieldsetList = Array.from(formElement.querySelectorAll(this.fieldSetElement));
            fieldsetList.forEach((fieldset) => {
                this._setEventListeners(fieldset);
            });
        });
    };*/

    enableValidation() {
        this._resetValidation();
        this._setEventListeners();
    }
}


