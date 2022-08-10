export class Card {
    constructor(information, selector, handleCardClick, userId, handleDeleteCard, { handleSetLike, handleDeleteLike }) {
        this._name = information.name;
        this._link = information.link;
        this._likes = information.likes;
        this._selector = selector;
        this._id = information._id;
        this._ownerId = information.owner._id;
        this._information = information;
        this._handleSetLike = handleSetLike;
        this._handleDeleteLike = handleDeleteLike;
        this.userId = userId;

        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteCard;
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
        this.image = this.element.querySelector(".photos__grid");

        this.element.querySelector(".photos__title").textContent = this._name;
        this.image.src = this._link;

        this.image.setAttribute("alt", `${this._name}`);
        this.image.setAttribute("src", `${this._link}`);
    }

    _setImageListener() {
        this.image = this.element.querySelector(".photos__grid");
        this.image.addEventListener('click', () => { this._handleCardClick(this._name, this._link) });
    }

    _checkButtonLike() {
        if(this._likes.some((information) => { //здесь хотим проверить, удовлетворяет ли какой-то эл-т из массива, условию, которое мы передаем в функции
            return information._id === this.userId //здесь проверяем условие: если айди картинки равно нашему айди, то
        })) {
            this.like.classList.toggle('photos__like_active') //ставим активный лайк
        }
    }

    likesCount(likes) {
        this.numLikes.textContent = likes.length;
    }

    activeLike() {
        this.like.classList.add('photos__like_active');
    }

    noLike() {
        this.like.classList.remove('photos__like_active');
    }

    _setLikeListener() {
        this.like.addEventListener("click", () => {
            if(this.like.classList.contains('photos__like_active')) {
                this._handleDeleteLike();
                this.noLike()
            }
            else {
                this._handleSetLike();
                this.activeLike;
                
            }
        }
        )
    }

    _setDeleteListener() {
        this.buttonDelete = this.element.querySelector(".photos__delete");
        this.buttonDelete.addEventListener("click", () => { this._handleDeleteCard(this) });
    }

    removeCard() {
        this.element.remove();
        this.element = null;
    };

    _checkButtonDelete() {
        if (this._ownerId !== this.userId) {
            this.buttonDelete = this.element.querySelector(".photos__delete");
            this.buttonDelete.remove();
        }
    }

    generateCard() {
        this.element = this._takeTemplate();

        this.numLikes = this.element.querySelector('.photos__like-number');
        this.numLikes.textContent = this._likes.length

        //ищу класс подсчета лайков
        this.like = this.element.querySelector(".photos__like");

        this._setLayOut();
        this._setImageListener();
        this._setLikeListener();
        this._setDeleteListener();
        this._checkButtonDelete();
        this._checkButtonLike();

        return this.element;
    }
}