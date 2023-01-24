import { Popup } from './Popup.js'
import { formAddProfile } from './index.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, changeProfile) {
        super(popupSelector);
        this._changeProfile = changeProfile;
        this._inputs = Array.from(this._popupSelector.querySelector('.popup__input'));
    }

    _getInputValues() {
        console.log(111)
   const inputValues = {};
   this._inputs.forEach((input) =>{
    inputValues[input.name] = intup.value
   })
   return inputValues
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupSelector.addEventListener("submit", () => {this._changeProfile})

    }


    close() {
        formAddProfile.reset()
        super.close()
    }
}