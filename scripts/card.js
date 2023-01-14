
export class Card {

    constructor(templateSelector, callPopupImage) {
        this._templateSelector = templateSelector;
        this._callPopupImage = callPopupImage;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector(".element")
            .cloneNode(true);
        return cardElement;
    }

    generateItem(name, link) {
        this._element = this._getTemplate();
        this._setEventListeners(name, link);
        this._element.querySelector(".element__bottom-title").textContent = name;
        this._element.querySelector(".element__image").src = link;
        this._element.querySelector(".element__image").alt = name;
        return this._element
    }

    _likeElement(e) {
        e.target.classList.toggle("element__bottom-like_active");
    }

    _handleDeleteItem(e) {
        e.target.parentNode.remove();
    }

    _setEventListeners(name, link) {
        this._element.querySelector(".element__bottom-like").addEventListener("click", (e) => {
            this._likeElement(e);
        });
        this._element.querySelector(".element__delete").addEventListener("click", (e) => {
            this._handleDeleteItem(e);
        });
        this._element.querySelector(".element__image").addEventListener("click", () => {
            this._callPopupImage(name, link);
        });

    }
}