export class Card {
    constructor(information, selector, openPhoto) {
        this._name = information.name;
        this._link = information.link;
        this._selector = selector;
        this._openPhoto = openPhoto;
    }

    _takeTemplate() {
        const createdCard = document
            .querySelector(this._selector)
            .content
            .querySelector('.photos__container')
            .cloneNode(true);

            return createdCard;
    }

    _setLayOut() {
        const image = this.element.querySelector(".photos__grid");

        this.element.querySelector(".photos__title").textContent = this._name;
        image.src = this._link;

        image.setAttribute("alt", `${this._name}`);
        image.setAttribute("src", `${this._link}`);
    }

    _setImageListener() {
        const image = this.element.querySelector(".photos__grid");
        image.addEventListener('click', () => this._openPhoto(this._name, this._link));
    }

    _setLikeListener() {
        const like = this.element.querySelector(".photos__like");
        like.addEventListener("click", () => this._changeLikeStatus(like));
    }

    _changeLikeStatus(item) {
        item.classList.toggle('photos__like_active');
    };

    _setDeleteListener() {
        const buttonDelete = this.element.querySelector(".photos__delete");
        buttonDelete.addEventListener("click", () => this._removeCard(buttonDelete));
    }

    _removeCard(item) {
        this.element.remove();
    };


    generateCard() {
        this.element = this._takeTemplate();

        this._setLayOut()
        this._setImageListener();
        this._setLikeListener();
        this._setDeleteListener();

        return this.element;
    }
}

