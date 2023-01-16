
export class Card {

    constructor(data, templateSelector, callPopupImage) {
        this._templateSelector = templateSelector;
        this._callPopupImage = callPopupImage;
        this._name = data.name;
        this._link = data.link;
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
        this._setEventListeners();
        this._element.querySelector(".element__bottom-title").textContent = this._name;
        this._element.querySelector(".element__image").src = this._link;
        this._element.querySelector(".element__image").alt = this._name;
        return this._element
    }

    _likeElement(e) {
        e.target.classList.toggle("element__bottom-like_active");
    }

    _handleDeleteItem(e) {
        e.target.parentNode.remove();
    }

    _setEventListeners() {
        this._element.querySelector(".element__bottom-like").addEventListener("click", (e) => {
            this._likeElement(e);
        });
        this._element.querySelector(".element__delete").addEventListener("click", (e) => {
            this._handleDeleteItem(e);
        });
        this._element.querySelector(".element__image").addEventListener("click", () => {
            this._callPopupImage(this._name, this._link);
        });

    }
}