export class Card {
    constructor(information, selector, openPhoto) {
        this.name = information.name;
        this.link = information.link;
        this.selector = selector;
        this._openPhoto = openPhoto;
    }

    _takeTemplate() {
        const createdCard = document
            .querySelector(this.selector)
            .content
            .querySelector('.photos__container')
            .cloneNode(true);

            return createdCard;
    }

    _setLayOut() {
        const image = this.element.querySelector(".photos__grid");

        this.element.querySelector(".photos__title").textContent = this.name;
        image.src = this.link;

        image.setAttribute("alt", `${this.name}`);
        image.setAttribute("src", `${this.link}`);
    }

    _setImageListener() {
        const image = this.element.querySelector(".photos__grid");
        image.addEventListener('click', () => this._openPhoto(this.name, this.link));
    }

    _setLikeListener() {
        const like = this.element.querySelector(".photos__like");
        like.addEventListener("click", () => this._changeLikeStatus(like));
    }

    _changeLikeStatus(item) {
        item.classList.toggle('photos__like_active');
    };

    _setDeleteListener() {
        const dlt = this.element.querySelector(".photos__delete");
        dlt.addEventListener("click", () => this._removeCard(dlt));
    }

    _removeCard(item) {
        const photosPart = item.closest('.photos__container');
        photosPart.remove();
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

