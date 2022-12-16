const showError = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  error.classList.add(config.errorClass);
  input.classList.add(config.inputErrorClass);
};

const hideError = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = "";
  error.classList.remove(config.errorClass);
  input.classList.remove(config.inputErrorClass);
};



//проверка на валидность формы
const checkInputValidity = (input, config) => {

  if (!input.validity.valid) {
    showError(input, config);
  } else {
    hideError(input, config);
  }
};

//переключатель кнопки
const toggleButton = (inputs, button, config) => {
  const isFormValid = inputs.every((input) => input.validity.valid);

  if (isFormValid) {
    //кнопка активна
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  } else {
    //кнопка неактивна
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;

  }
};

const enableValidation = (config) => {
  const forms = [...document.querySelectorAll(config.formSelector)];
  forms.forEach((form) => {
    const inputs = [...form.querySelectorAll(config.inputSelector)];
    const button = form.querySelector(config.submitButtonSelector);


    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(input, config);
        toggleButton(inputs, button, config);
      });
    });
  });
};



enableValidation({
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error",
});
