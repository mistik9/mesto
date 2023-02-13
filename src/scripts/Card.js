
export class Card {

    constructor({ data, userId, handleCardClick, handleDeleteClick, handleLikeClick }, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._like = data.likes.length;
        console.log(data.likes.length)
        this._owner = data.owner._id;
        this._userId = userId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
        this._templateSelector = templateSelector;

    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector(".element")
            .cloneNode(true);
        return cardElement;
    }

    generateItem() {
        this._element = this._getTemplate();
        this._elementImg = this._element.querySelector(".element__image");
        this._elementLikeBtn = this._element.querySelector(".element__bottom-like");
        this._likeCounter = this._element.querySelector(".element__bottom-like-counter");
        this._deleteIcon = this._element.querySelector(".element__delete")
        this._element.querySelector(".element__bottom-title").textContent = this._name;
        this._likeCounter.textContent = this._like;
        this._elementImg.src = this._link;
        this._elementImg.alt = this._name;
        this._setEventListeners();
        this._checkDeleteState();
        return this._element;
    }

    _checkDeleteState() {
        if (this._owner !== this._userId) {
            this._deleteIcon.remove()
        }
    }

    likeElement() {
        this._elementLikeBtn.classList.add("element__bottom-like_active");
        this._likeCounter.textcontent = ++this._like
    }

    dislikeElement() {
        this._elementLikeBtn.classList.remove("element__bottom-like_active");
        this._likeCounter.textcontent = --this._like
    }

    checkLikeState() {
        return this._elementLikeBtn.classList.contains("element__bottom-like_active");
    }

    deleteCard() {
        this._element.remove();
        this._element = null;
    }


    _setEventListeners() {
        this._elementLikeBtn.addEventListener("click", () => {
            this._handleLikeClick();
        });
        this._deleteIcon.addEventListener("click", () => {
            this._handleDeleteClick();

        });
        this._elementImg.addEventListener("click", () => {
            this._handleCardClick(this._name, this._link);
        });

    }
}