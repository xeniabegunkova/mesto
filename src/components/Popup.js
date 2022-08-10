export class Popup {
    constructor({ selector }) {
        this.popup = document.querySelector(selector);

        this.popupClose = this.popup.querySelector('.popup__close')
    }

    open() {
        this.popup.classList.add('popup_is-open');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this.popup.classList.remove('popup_is-open');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (e) => {
        if (e.key == 'Escape') {
            this.close()
        }
    }

    setEventListeners() {
        this.popup.addEventListener('mousedown', e => {
            if ((e.target === e.currentTarget) // отвечает за закрытие по оверлею
                || (e.target === this.popupClose)) //отвечает за закрытие по крестику
            {
                this.close();
            }
        })
    }
}
