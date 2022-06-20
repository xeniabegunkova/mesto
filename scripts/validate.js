const installation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    fieldSetElement: '.popup__fieldset',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_error-active',
    errorSelector: '.popup__input-error',
    frErrorSelector: '-input-error',
}

/* Убираем валидацию. Яндекс тренажер. Лекция куратора.*/
const resetValidation = (formElement) => {
    const inputList = (formElement.querySelectorAll(installation.inputSelector));
    const errorList = (formElement.querySelectorAll(installation.errorSelector));
    const buttonEl = (formElement.querySelector(installation.submitButtonSelector));
    for (const inputElement of inputList) {
        if (inputElement.classList.contains(installation.inputErrorClass)) {
            inputElement.classList.remove(installation.inputErrorClass);
        }
    }
    for (const errorElement of errorList) {
        if (errorElement.classList.contains(installation.errorClass)) {
            errorElement.classList.remove(installation.errorClass);
        }
    }
    if (buttonEl.classList.contains(installation.inactiveButtonClass)) {
        buttonEl.classList.remove(installation.inactiveButtonClass);
        buttonEl.disabled = false;
    }
}

/*Ошибка видна. Яндекс тренажер. Задание 4*/

const showInputError = (formElement, inputElement, errorMessage, installation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}${installation.frErrorSelector}`);
    inputElement.classList.add(installation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(installation.errorClass);
};

/*Ошибка скрыта. Яндекс тренажер. Задание 4*/

const hideInputError = (formElement, inputElement, installation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}${installation.frErrorSelector}`);
    inputElement.classList.remove(installation.inputErrorClass);
    errorElement.classList.remove(installation.errorClass);
    errorElement.textContent = '';
};

/*Проверка валидности полей. Яндекс тренажер. Задание 4*/
const checkInputValidity = (formElement, inputElement, installation) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, installation);
    } else {
        hideInputError(formElement, inputElement, installation);
    }
};

/* Проверка валидности полей. Яндекс тренажер. Задание 4*/
const hasInvalidInput = inputList => {
    return inputList.some(inputElement => {
        return !inputElement.validity.valid;
    });
};

/* Работа с кнопками*/
const toggleButtonState = (inputList, buttonEl, installation) => {
    if (hasInvalidInput(inputList)) {
        buttonEl.classList.add(installation.inactiveButtonClass);
        buttonEl.disabled = true;
    } else {
        buttonEl.classList.remove(installation.inactiveButtonClass);
        buttonEl.disabled = false;
    }
};

/*Добавляем setEventListeners. Яндес тренажер. Задание 4*/

const setEventListeners = (formElement, installation) => {
    const inputList = Array.from(formElement.querySelectorAll(installation.inputSelector));
    const buttonEl = formElement.querySelector(installation.submitButtonSelector)
    toggleButtonState(inputList, buttonEl, installation);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, installation);
            toggleButtonState(inputList, buttonEl, installation);
        });
    });
};

/*активировать валидацию. Яндекс тренажер. Задание 4. Урок 6*/

const enableValidation = (installation) => {
    const formList = Array.from(document.querySelectorAll(installation.formSelector));
    formList.forEach((formElement) => {
        const fieldsetList = Array.from(formElement.querySelectorAll(installation.fieldSetElement));
        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset, installation);
        });
    });
};

enableValidation(installation);