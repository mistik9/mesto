import { Popup } from './Popup.js'


export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._buttonSubmit = this._popup.querySelector('.popup__save')
        this._form = this._popup.querySelector('.popup__content');
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
        this._popup.addEventListener("submit", (e) => {
            e.preventDefault();
            this._submitForm(this._getInputValues());
        })
    }


    close() {
        super.close()
        this._form.reset()
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._buttonSubmit.textContent = 'Сохранение...';
        } else {
            this._buttonSubmit.textContent = 'Сохранить';
        }
    }
}