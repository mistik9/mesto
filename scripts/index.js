/*
Генерация карточек
*/
const elementTemplate = document.querySelector("#element-template").content; //шаблон картинок карточек
const listElement = document.querySelector(".elements__container"); // все карточки с картинками
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

// удаление карточки
const handleDeleteItem = (e) => {
  e.target.closest(".element").remove();
};
// генерация карточек
const generateItem = (item) => {
  const elementItem = elementTemplate.cloneNode(true);
  elementItem.querySelector(".element__image").src = item.link;
  elementItem.querySelector(".element__image").alt = item.name;
  elementItem.querySelector(".element__image").addEventListener("click", openPopupImage);
  elementItem.querySelector(".element__bottom-title").textContent = item.name;
  elementItem.querySelector(".element__delete").addEventListener("click", handleDeleteItem);
  return elementItem;
}
initialCards.forEach((item) => listElement.append(generateItem(item)));

/*
Попап профиль
*/
const popupOpen = document.querySelector(".profile__edit-button"); // кнопка открыть попап слева
const profileForm = document.querySelector("#popup_profile"); // попап форма профиля
let profileName = document.querySelector(".profile__info-name"); // имя профиля со страницы
let profileJob = document.querySelector(".profile__info-job"); // работы профиля со страницы
const nameInput = document.querySelector(".popup__input_type_name"); // поле ввода имени в форме
const jobInput = document.querySelector(".popup__input_type_job"); // поле ввода работы в форме
const profileElement = profileForm.querySelector(".popup__content"); // форма попап профиля на которой вызывается событие submit

// открытие попапа редактировать профиль
function openPopup(e) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  profileForm.classList.toggle("popup_opened");
};
popupOpen.addEventListener("click", openPopup);

// закрытие попапа
function closePopup(e) {
  profileForm.classList.remove("popup_opened");
};
profileForm.querySelector(".popup__close").addEventListener("click", closePopup);

// отправка формы
function profileChange(e) {
  e.preventDefault();
  profileName.innerHTML = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
profileElement.addEventListener("submit", profileChange);

/*
Попап добавить картинку
*/
const popupAdd = document.querySelector(".profile__add-button"); // кнопка открыть попап справа
const addForm = document.querySelector("#popup_add"); // попап форма добавления картинки
let placeInput = document.querySelector(".popup__input_type_place"); // поле ввода места
let urlInput = document.querySelector(".popup__input_type_url"); // поле ввода ссылки
const addElement = addForm.querySelector(".popup__content") // форма попап добавление карточки на которой вызывается событие submit 

// открытие попапа добавление карточки
function openPopupAdd(e) {
  placeInput.value = placeInput.placeholder;
  addForm.classList.toggle("popup_opened");
};
popupAdd.addEventListener("click", openPopupAdd);

// закрытие попапа
function closePopupAdd(e) {
  addForm.classList.remove("popup_opened");
};
addForm.querySelector(".popup__close").addEventListener("click", closePopupAdd);

// добавление карточки
function itemAdd(e) {
  e.preventDefault();
  closePopupAdd();
  let card = {
    name: placeInput.value,
    link: urlInput.value,
  }
  listElement.append(generateItem(card));
}
addElement.addEventListener("submit", itemAdd);

/*
Сердечно
*/
const likeButtonElemnt = document.querySelectorAll(".element__bottom-like"); // массив всех сердечек

// поставить сердечко
function likeElement(e) {
  e.target.classList.toggle("element__bottom-like_active");
};
likeButtonElemnt.forEach((item) => item.addEventListener("click", likeElement));


//Открытие попапа с картинкой
const popupImage = document.querySelector("#popup_image");
const everyCard = listElement.querySelectorAll(".element__image");
let itemImage = document.querySelector(".popup__image");
let itemDisc = document.querySelector(".popup__discription");

function openPopupImage(e) {
  itemImage.src = e.target.src;
  itemDisc.innerHTML = e.target.alt;
  popupImage.classList.toggle("popup_opened");
};

function closePopupImg(e) {
  popupImage.classList.remove("popup_opened");
};
popupImage.querySelector(".popup__close").addEventListener("click", closePopupImg);
