export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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
export const profileJob = ".profile__info-job"; // работа профиля со страницы
export const nameInput = document.querySelector(".popup__input_type_name"); // поле ввода имени в форме
export const jobInput = document.querySelector(".popup__input_type_job"); // поле ввода работы в форме
export const popupAdd = document.querySelector("#popup_add"); // попап добавления картинки
export const formAddCard = popupAdd.querySelector(".popup__content"); // форма попап добавление карточки на которой вызывается событие submit
export const popupImage = document.querySelector("#popup_image"); // картинка в попапе