import './../pages/index.css';
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import { initialCards, validationConfig, popupEditButton, 
  popupProfile, profileName, profileJob, nameInput,
  jobInput, popupAdd, formAddCard, popupImage } from "./constants.js";

export const formAddProfile = popupProfile.querySelector(".popup__content"); // форма попап профиля на которой вызывается событие submit

//валидатор формы редактировать профиль
const validatorFormAddProfile = new FormValidator(validationConfig, formAddProfile);
validatorFormAddProfile.enableValidation();

//данные профиля
const userInfo = new UserInfo({ profileName, profileJob });

//попап редактировать профиль
const popupEditProfile = new PopupWithForm("#popup_profile", changeProfile);
popupEditButton.addEventListener("click", () => {
  const userInfoOnPage = userInfo.getUserInfo();
  nameInput.value = userInfoOnPage.name;
  jobInput.value = userInfoOnPage.job;
  console.log(nameInput.value)
  popupEditProfile.open();
});
popupEditProfile.setEventListeners()

// изменение профиля
function changeProfile(name, job) {
  userInfo.setUserInfo(name, job);
}


//валидатор формы добавить карточку
const validatorFormAddCard = new FormValidator(validationConfig, formAddCard);
validatorFormAddCard.enableValidation();

//Попап просмотреть картинку
const popupWithImage = new PopupWithImage("#popup_image")
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
const popupAddImage = new PopupWithForm("#popup_add", addNewCard)
document.querySelector(".profile__add-button").addEventListener("click", () => popupAddImage.open());
popupAddImage.setEventListeners()

//функция добавить картинку
function addNewCard(name, link) {
  const cardElement = createCard(name, link);
  cardList.addItem(cardElement);
}






