
export class Card {

    constructor(data, templateSelector, popup) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    static selectors = {
        popup: '.popup__input'
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
        this._setEventListeners()
        this._element.querySelector(".element__bottom-title").textContent = this._name;
        this._element.querySelector(".element__image").src = this._link;
        this._element.querySelector(".element__image").alt = this._name;

        return this._element
    }

    _likeElement(e) {
        e.target.classList.toggle("element__bottom-like_active");
    }

    _handleDeleteItem(e) {
        this._element.remove();
    }

    _handleSubmit(e) {
        e.preventDefault();
        const name = e.currentTarget.querySelector('.popup__input').value;
        const link = e.currentTarget.querySelector('.popup__input_type_url').value;
    }

    _callPopupImage() {
        document.querySelector(".popup__image").src = this._link
        document.querySelector(".popup__image").alt = this._name;
        document.querySelector(".popup__discription").textContent = this._name;
        document.querySelector("#popup_image").classList.add("popup_opened");
        

    }


    _setEventListeners() {
        this._element.querySelector(".element__bottom-like").addEventListener("click", (evt) => {
            this._likeElement(evt);
        });
        this._element.querySelector(".element__delete").addEventListener("click", () => {
            this._handleDeleteItem()
        });
        this._element.querySelector(".element__image").addEventListener("click", () => {
            this._callPopupImage(this._name, this._link)
        });
    
    }
}