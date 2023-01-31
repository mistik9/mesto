import './../pages/index.css';
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import { initialCards } from "./constants.js";
import { validationConfig } from "./constants.js";

//Попап профиль
const popupEditButton = document.querySelector(".profile__edit-button"); // кнопка открыть попап слева
const popupProfile = document.querySelector("#popup_profile"); // попап профиля

export const formAddProfile = popupProfile.querySelector(".popup__content"); // форма попап профиля на которой вызывается событие submit

//валидатор попапа редактировать профиль
const validatorFormAddProfile = new FormValidator(validationConfig, formAddProfile);
validatorFormAddProfile.enableValidation();

const profileName = ".profile__info-name"; // имя профиля со страницы
const profileJob = ".profile__info-job"; // работа профиля со страницы
const nameInput = document.querySelector(".popup__input_type_name"); // поле ввода имени в форме
const jobInput = document.querySelector(".popup__input_type_job"); // поле ввода работы в форме
const userInfo = new UserInfo({ profileName, profileJob });

//попап редактировать профиль
const popupEditProfile = new PopupWithForm(popupProfile, changeProfile);
popupEditButton.addEventListener("click", () => {
  const userInfoOnPage = userInfo.getUserInfo();
  nameInput.value = userInfoOnPage.name;
  jobInput.value = userInfoOnPage.job;
  popupEditProfile.open();
});
popupEditProfile.setEventListeners()

// изменение профиля
function changeProfile(name, job) {
  userInfo.setUserInfo(name, job);
}

const popupAdd = document.querySelector("#popup_add"); // попап добавления картинки
const formAddCard = popupAdd.querySelector(".popup__content"); // форма попап добавление карточки на которой вызывается событие submit
const popupImage = document.querySelector("#popup_image"); // картинка в попапе

const validatorFormAddCard = new FormValidator(validationConfig, formAddCard);
validatorFormAddCard.enableValidation();

//Попап просмотреть картинку
const popupWithImage = new PopupWithImage(popupImage)
const handleCardClick = (name, link) => {
  popupWithImage.open(name, link)
};

popupWithImage.setEventListeners()


//создание карточки из класса
function createCard(item) {
  const card = new Card(item, "#element-template", handleCardClick);
  return card.generateItem();

}

//Загрузка карточек 
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item)
    cardList.addItem(cardElement);
  }
}, ".elements__container");

cardList.renderItems();

// открытие попапа добавить карточку
const popupAddImage = new PopupWithForm(popupAdd, addNewCard)
document.querySelector(".profile__add-button").addEventListener("click", () => popupAddImage.open());
popupAddImage.setEventListeners()


function addNewCard(name, link) {
  const cardElement = createCard(name, link);
  document.querySelector(".elements__container").prepend(cardElement);
}







