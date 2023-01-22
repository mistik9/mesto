import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";

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
const popupEditProfile = new Popup(popupProfile)
popupEditProfile.setEventListeners()

// функция редактировать профиль
function callPopupProfile() {
  validatorFormAddCard.enableSubmitButton();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupEditProfile.open();
}
popupEditButton.addEventListener("click", callPopupProfile);

// отправка формы
function changeProfile(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupEditProfile.close();
}
 formAddProfile.addEventListener("submit", changeProfile);



//Попап добавить картинку
const popupAdd = document.querySelector("#popup_add"); // попап форма добавления картинки
const formAddCard = popupAdd.querySelector(".popup__content"); // форма попап добавление карточки на которой вызывается событие submit
export const popupImage = document.querySelector("#popup_image"); // картинка в попапе
const validatorFormAddCard = new FormValidator(validationConfig, formAddCard);
validatorFormAddCard.enableValidation();


 const popupOpenImage = new Popup(popupImage)
 popupOpenImage.setEventListeners()


// const popupWithImage= new PopupWithImage(popupImage)
// const handleCardClick = () => {
//   popupWithImage.open()
// }
// popupWithImage.setEventListeners()

//просмотр имеющейся карточки
function callPopupImage(name, link) {
  document.querySelector(".popup__image").src = link
  document.querySelector(".popup__image").alt = name;
  document.querySelector(".popup__discription").textContent = name;
  popupOpenImage.open();

}

// //создание карточки из класса
// function createCard(data) {
//   const card = new Card(data, "#element-template", callPopupImage);
//   return card.generateItem();
// }

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, "#element-template", callPopupImage);
    const cardElement = card.generateItem();
    cardList.addItem(cardElement);


  }
}, ".elements__container");

cardList.renderItems();



// //загрузка имеющихся карточек
// initialCards.forEach((item) => {
//   
//   document.querySelector(".elements__container").append(cardElement);
// })

const popupAddImage = new Popup(popupAdd)
popupAddImage.setEventListeners()


// открытие попапа добавить карточку
function callPopupAdd() {
  popupAddImage.open();
}
document.querySelector(".profile__add-button").addEventListener("click", callPopupAdd);


// // функция добавление карточки
// function addNewItem(e) {
//   e.preventDefault();
//   const item = {
//     name: document.querySelector(".popup__input_type_place").value,
//     link: document.querySelector(".popup__input_type_url").value,
//   }
//   const cardElement = createCard(item);
//   closePopup(popupAdd);
//   formAddCard.reset();
//   validatorFormAddCard.disableSubmitButton();
//   document.querySelector(".elements__container").prepend(cardElement);
// }

// formAddCard.addEventListener("submit", addNewItem);





