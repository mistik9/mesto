export class FormValidator {

  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._inputs = [...this._form.querySelectorAll(this._inputSelector)];
    this._button = this._form.querySelector(this._submitButtonSelector);
  }

//показать ошибку
  _showError(input) {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  };

  //спрятать ошибку
  _hideError(input) {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    error.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  };

  //проверка на валидность формы
  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  };


  _setEventListener() {
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this.enableSubmitButton();
        this.disableSubmitButton();
      });
    });

  }
//включить валидацию
  enableValidation() {
    this._setEventListener()
  };

  disableSubmitButton() {
    //кнопка неактивна
    const isFormValid = this._inputs.every((input) => input.validity.valid);
    if (!isFormValid) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    }
  }

  //кнопка активна
  enableSubmitButton() {
    const isFormValid = this._inputs.every((input) => input.validity.valid);
    if (isFormValid) {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    }
  };

}





