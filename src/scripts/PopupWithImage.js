import { Popup } from './Popup.js'


export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupSelector.querySelector(".popup__image");
        this._discription = this._popupSelector.querySelector(".popup__discription")
    }

    open(name, link) {
        this._image.src = link;
        this._image.alt = name;
        this._discription.textContent = name;
        super.open()
    }
}

