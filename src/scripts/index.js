import './../pages/index.css';
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import {
  validationConfig, popupEditButton,
  popupProfile, profileName, profileAbout, nameInput,
  aboutInput, formAddCard
} from "./constants.js";
import { api } from './api.js';

export const formAddProfile = popupProfile.querySelector(".popup__content"); // форма попап профиля на которой вызывается событие submit
export { api } from "./api.js";

//валидатор формы редактировать профиль
const validatorFormAddProfile = new FormValidator(validationConfig, formAddProfile);
validatorFormAddProfile.enableValidation();

//данные профиля
const userInfo = new UserInfo({ profileName, profileAbout });

//попап редактировать профиль
const popupEditProfile = new PopupWithForm("#popup_profile", changeProfile);
popupEditButton.addEventListener("click", () => {
  const userInfoOnPage = userInfo.getUserInfo();
  nameInput.value = userInfoOnPage.name;
  aboutInput.value = userInfoOnPage.about;
  popupEditProfile.open();
});
popupEditProfile.setEventListeners()

// изменение профиля
function changeProfile(data) {
  api.updateUserData(data)
  .then(res => {
    console.log(res)
    userInfo.setUserInfo(res)
  })
.catch(error => {
  console.log('Ошибочка вышла')
})
 ;
}



//валидатор формы добавить карточку
const validatorFormAddCard = new FormValidator(validationConfig, formAddCard);
validatorFormAddCard.enableValidation();


//Попап просмотреть картинку
const popupWithImage = new PopupWithImage("#popup_image")
const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
};
popupWithImage.setEventListeners()

//создание карточки из класса
function createCard(item) {
  const card = new Card(item, "#element-template", handleCardClick);
  return card.generateItem();
}

//Загрузка карточек 
const cardList = new Section({

  renderer: (data) => {
      cardList.addItem(createCard(data));
  }

}, ".elements__container");

api.getInitialCards()
  .then(res => {
      cardList.renderItems(res)
  })


// открытие попапа добавить карточку
const popupAddImage = new PopupWithForm("#popup_add", addCard)
document.querySelector(".profile__add-button").addEventListener("click", () => {
  validatorFormAddCard.disableSubmitButton();
  popupAddImage.open();
});
popupAddImage.setEventListeners()

//функция добавить картинку
function addCard(data) {
api.addNewCard(data)
.then(res => {
   cardList.addItem(createCard(res))
  })
  .catch(error => {
    console.log('Карточка не добавлена')
  })
 }







