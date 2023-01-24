import { Popup } from './Popup.js'
import { popupImage } from './index.js'
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

    }

    open(name,link) {
        super.open()
        console.log(popupImage)
        this._popupSelector.querySelector(".popup__image").src =link;
        this._popupSelector.querySelector(".popup__image").alt = name;
        this._popupSelector.querySelector(".popup__discription").textContent = name;


    }
}

//просмотр имеющейся карточки
// function callPopupImage(name, link) {
//   document.querySelector(".popup__image").src = link
//   document.querySelector(".popup__image").alt = name;
//   document.querySelector(".popup__discription").textContent = name;
//   popupOpenImage.open();

// }