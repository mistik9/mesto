import { Popup } from './Popup.js'

export class PopupWithDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListener("submit", (e) => {
            e.preventDefault();
            this._submitForm();
            this.close();
        })
    }
}