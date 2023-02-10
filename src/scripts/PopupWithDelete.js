import { Popup } from './Popup.js'

export class PopupWithDelete extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._id = null;
    }

    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListener("submit", (e) => {
            e.preventDefault();
            if(this._id) this._handleSubmit(this._id);
            this.close();
        })
    }

    setId(id) {
        this._id = id;
    }



    
}