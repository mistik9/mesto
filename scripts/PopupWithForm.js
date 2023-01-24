import { Popup } from './Popup.js'
import { formAddProfile } from './index.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = popupSelector.querySelector('.popup__content')
        this._inputs = Array.from(this._popupSelector.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
        const inputValues = this._inputs.map(element => element.value);
        return inputValues

    }

    setEventListeners() {
        super.setEventListeners()
        this._popupSelector.addEventListener("submit", (e) => {
            e.preventDefault();
            const inputsArray = this._getInputValues();
             this._submitForm(...inputsArray)
             this.close();
        })

    }


    close() {
        super.close()
        this._form.reset()
        
    }
}