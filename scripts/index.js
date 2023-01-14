import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
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

const validationConfig = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error",
}

//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
};


//функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

//закрытие попапа по клавише эск
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//закрытие попапа на оверлей и кнопку закрыть
document.querySelectorAll(".popup").forEach(popup => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    };
  });
});

//Попап профиль
const popupEditButton = document.querySelector(".profile__edit-button"); // кнопка открыть попап слева
const popupProfile = document.querySelector("#popup_profile"); // попап профиля
const profileName = document.querySelector(".profile__info-name"); // имя профиля со страницы
const profileJob = document.querySelector(".profile__info-job"); // работа профиля со страницы
const nameInput = document.querySelector(".popup__input_type_name"); // поле ввода имени в форме
const jobInput = document.querySelector(".popup__input_type_job"); // поле ввода работы в форме
const formAddProfile = popupProfile.querySelector(".popup__content"); // форма попап профиля на которой вызывается событие submit
const validatorFormAddProfile = new FormValidator(validationConfig, formAddProfile);

// попап редактировать профиль
function callPopupProfile(e) {

  validatorFormAddProfile.enableValidation();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
}
popupEditButton.addEventListener("click", callPopupProfile);

// отправка формы
function changeProfile(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}
formAddProfile.addEventListener("submit", changeProfile);


//Попап добавить картинку
const popupAdd = document.querySelector("#popup_add"); // попап форма добавления картинки
const formAddCard = popupAdd.querySelector(".popup__content"); // форма попап добавление карточки на которой вызывается событие submit
const popupImage = document.querySelector("#popup_image"); // картинка в попапе
const validatorFormAddCard = new FormValidator(validationConfig, formAddCard);

function callPopupImage(name, link) {
  document.querySelector(".popup__image").src = link
  document.querySelector(".popup__image").alt = name;
  document.querySelector(".popup__discription").textContent = name;
  openPopup(popupImage);

}

const card = new Card("#element-template", callPopupImage);

//загрузка имеющихся карточек
initialCards.forEach((item) => {
  const cardElement = card.generateItem(item.name, item.link);
  document.querySelector(".elements__container").append(cardElement);
})

// функция добавление карточки
function callPopupAdd() {
  validatorFormAddCard.enableValidation();
  openPopup(popupAdd);
}
document.querySelector(".profile__add-button").addEventListener("click", callPopupAdd);


// добавление карточки
function addNewItem(e) {
  e.preventDefault();
  const name = document.querySelector(".popup__input_type_place").value;
  const link = document.querySelector(".popup__input_type_url").value;
  const cardElement = card.generateItem(name, link);
  closePopup(popupAdd);
  formAddCard.reset();
  validatorFormAddCard.toggleButtonState();
  document.querySelector(".elements__container").prepend(cardElement);
}

formAddCard.addEventListener("submit", addNewItem);





