import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor({ selector }) {
        super({selector}); //вызываем родительский конструктор, так как наследуется открытие от Попап
    
        //Ищем нужные классы для подписи ссылки и самого названия картинки
        this._popupImage = this.popup.querySelector('.popup__image'); 
        this._popupImageTitle = this.popup.querySelector('.popup__title-image');
    }

    open(name, link) {
        this._popupImage.alt = name;
        this._popupImage.src = link;
    
        this._popupImageTitle.textContent = name;

        super.open() //вызываем открытие попапа из класса Попап
    }
}