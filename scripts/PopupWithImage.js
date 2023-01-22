import { Popup } from './Popup.js'
import { popupImage } from './index.js'
export class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);
        this._link = data.link;
        this._name = data.name;


    }

    open() {
        super.open()



    }
}

//просмотр имеющейся карточки
// function callPopupImage(name, link) {
//   document.querySelector(".popup__image").src = link
//   document.querySelector(".popup__image").alt = name;
//   document.querySelector(".popup__discription").textContent = name;
//   popupOpenImage.open();

// }