export class FormValidator {

  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
  }

  _showError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  };

  _hideError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    error.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  };

  //проверка на валидность формы
  _checkInputValidity(form, input) {
    if (!input.validity.valid) {
      this._showError(form, input);
    } else {
      this._hideError(form, input);
    }
  };

  //переключатель кнопки
  _toggleButton(button, inputs) {
    const isFormValid = inputs.every((input) => input.validity.valid);

    if (isFormValid) {
      //кнопка активна
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
    } else {
      //кнопка неактивна
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    }
  };

  _setEventListener() {
    const forms = [...document.querySelectorAll(this._formSelector)];
    forms.forEach((form) => {
      const inputs = [...form.querySelectorAll(this._inputSelector)];
      const button = form.querySelector(this._submitButtonSelector);

      inputs.forEach((input) => {
        input.addEventListener("input", () => {
          this._checkInputValidity(form, input);
          this._toggleButton(button, inputs);
        });
      });
    });
  }

  enableValidation() {
    this._setEventListener()

  };
}




