import { Popup } from './Popup.js'

export class PopupWithDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.delcard = null;
    }

    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListener("submit", (e) => {
            e.preventDefault();
            this.delcard();
        })
    }
}