
export class Card {

    constructor(data, userId, templateSelector, handleCardClick) {
         this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._like = data.likes.length;
        this._owner = data.owner._id;
        this._userId = userId;
        
    
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
        this._elementImg = this._element.querySelector(".element__image")
        this._elementLikeBtn = this._element.querySelector(".element__bottom-like")
        this._setEventListeners();
        this._element.querySelector(".element__bottom-title").textContent = this._name;
        this._elementImg.src = this._link;
        this._elementImg.alt = this._name;

              return this._element;
    }

    _likeElement() {
        this._elementLikeBtn.classList.add("element__bottom-like_active");
        this._likeCounter.textcontent = ++this._like
           }

           _dislikeElement() {
            this._elementLikeBtn.classList.remove("element__bottom-like_active");
            this._likeCounter.textcontent = --this._like
           }
    _handleDeleteItem() {
        this._element.remove();
        this._element = null;
    }



    _setEventListeners() {
        this._elementLikeBtn.addEventListener("click", () => {
            this._likeElement();
        });
        this._element.querySelector(".element__delete").addEventListener("click", () => {
            this._handleDeleteItem();
        });
        this._elementImg.addEventListener("click", () => {
            this._handleCardClick(this._name, this._link);
        });

    }
}