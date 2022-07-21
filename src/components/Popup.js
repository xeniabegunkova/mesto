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

    _handleCloseClick() {
        this.popup.addEventListener('mousedown', (e) => {
            const container = this.popup.querySelector('.popup__content')
            const click = e.composedPath().includes(container)
            if (!click) {
                this.close()
            }
        })
    }

    setEventListeners() {
        this.popupClose.addEventListener('click', () => {
            this.close(this.popup)
        })
        this._handleCloseClick();
    }
}
