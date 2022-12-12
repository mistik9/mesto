const inputs = [...document.querySelectorAll(".popup__input")];

//проверка на валидность формы
const checkInputValidity = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`);

  if (input.validity.valid) {
    //поле валидно
    error.textContent = "";
    error.classList.remove(config.errorClass);
    input.classList.remove(config.inputErrorClass);
  } else {
    //поле невалидно
    error.textContent = input.validationMessage;
    error.classList.add(config.errorClass);
    input.classList.add(config.inputErrorClass);
  }
};
//переключатель кнопки
const toggleButton = (inputs, button, config) => {
  const isFormValid = inputs.every((input) => input.validity.valid);

  if (isFormValid) {
    //кнопка активна
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = "";
  } else {
    //кнопка неактивна
    button.classList.add(config.inactiveButtonClass);
    button.disabled = "disabled";
  }
};

const enableValidation = (config) => {
  const forms = [...document.querySelectorAll(config.formSelector)];
  forms.forEach((form) => {
    const inputs = [...form.querySelectorAll(config.inputSelector)];
    const button = form.querySelector(config.submitButtonSelector);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

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
