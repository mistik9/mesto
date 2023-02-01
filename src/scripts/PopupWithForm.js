import { Popup } from './Popup.js'
import { formAddProfile } from './constants.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = popupSelector.querySelector('.popup__content');
        this._inputList = [...this._form.querySelectorAll('.popup__input')];

    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => {
            this._inputValues[input.id] = input.value
        })
        return this._inputValues

    }

    setEventListeners() {
        super.setEventListeners()
        this._popupSelector.addEventListener("submit", (e) => {
            e.preventDefault();

            this._submitForm(this._getInputValues());
            this.close();
        })
    }


    close() {
        super.close()
        this._form.reset()
    }
}