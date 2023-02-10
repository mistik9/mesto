export const validationConfig = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error",
}

export const popupEditButton = document.querySelector(".profile__edit-button"); // кнопка открыть попап слева
export const popupProfile = document.querySelector("#popup_profile"); // попап профиля
export const profileName = ".profile__info-name"; // имя профиля со страницы
export const profileAbout = ".profile__info-about"; // работа профиля со страницы
export const nameInput = document.querySelector(".popup__input_type_name"); // поле ввода имени в форме
export const aboutInput = document.querySelector(".popup__input_type_about"); // поле ввода работы в форме
export const popupAdd = document.querySelector("#popup_add"); // попап добавления картинки
export const formAddCard = popupAdd.querySelector(".popup__content"); // форма попап добавление карточки на которой вызывается событие submit
export const popupImage = document.querySelector("#popup_image"); // картинка в попапе
export const popupAvatar = document.querySelector('#popup_avatar')
export const formEditAvatar = popupAvatar.querySelector(".popup__content")
export const popupEditAvatarButton = document.querySelector('.profile__edit-avatar-button');
export const profileAvatar = ".profile__avatar"