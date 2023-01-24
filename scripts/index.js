import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";

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



//Попап профиль
const popupEditButton = document.querySelector(".profile__edit-button"); // кнопка открыть попап слева
const popupProfile = document.querySelector("#popup_profile"); // попап профиля
const profileName = document.querySelector(".profile__info-name"); // имя профиля со страницы
const profileJob = document.querySelector(".profile__info-job"); // работа профиля со страницы
const nameInput = document.querySelector(".popup__input_type_name"); // поле ввода имени в форме
const jobInput = document.querySelector(".popup__input_type_job"); // поле ввода работы в форме
export const formAddProfile = popupProfile.querySelector(".popup__content"); // форма попап профиля на которой вызывается событие submit

//валидатор попапа редактировать профиль
const validatorFormAddProfile = new FormValidator(validationConfig, formAddProfile);
validatorFormAddProfile.enableValidation();

//попап редактировать профиль
const popupEditProfile = new PopupWithForm(popupProfile)
popupEditButton.addEventListener("click",()=> popupEditProfile.open(nameInput, jobInput));
popupEditProfile.setEventListeners()

// // функция редактировать профиль
// function callPopupProfile() {
//   validatorFormAddCard.enableSubmitButton();
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
//   popupEditProfile.open();
// }


// отправка формы
function changeProfile(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupEditProfile.close();
}
formAddProfile.addEventListener("submit", changeProfile);




const popupAdd = document.querySelector("#popup_add"); // попап форма добавления картинки
const formAddCard = popupAdd.querySelector(".popup__content"); // форма попап добавление карточки на которой вызывается событие submit
const popupImage = document.querySelector("#popup_image"); // картинка в попапе

const validatorFormAddCard = new FormValidator(validationConfig, formAddCard);
validatorFormAddCard.enableValidation();

// открытие попапа добавить карточку
const popupAddImage = new PopupWithForm(popupAdd)
popupAddImage.setEventListeners()

function callPopupAdd() {
  popupAddImage.open();
}
document.querySelector(".profile__add-button").addEventListener("click", callPopupAdd);


//Попап просмотреть картинку
const popupWithImage = new PopupWithImage(popupImage)
const callPopupImage = (name,link) =>{
popupWithImage.open(name, link)};

popupWithImage.setEventListeners()


//Загрузка карточек
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, "#element-template", callPopupImage);
    const cardElement = card.generateItem();
    cardList.addItem(cardElement);


  }
}, ".elements__container");

cardList.renderItems();







