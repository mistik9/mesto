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

/*
Генерация карточек
*/
const elementTemplate = document.querySelector("#element-template").content; //шаблон картинок карточек
const listElement = document.querySelector(".elements__container"); // все карточки с картинками

// удаление карточки
const handleDeleteItem = (e) => {
  e.target.closest(".element").remove();
};
// генерация карточек
const generateItem = (item) => {
  const elementItem = elementTemplate.cloneNode(true);
  const elementImage = elementItem.querySelector(".element__image");
  elementImage.src = item.link;
  elementImage.alt = item.name;
  elementImage.addEventListener("click", callPopupImage);
  elementItem.querySelector(".element__bottom-title").textContent = item.name;
  elementItem.querySelector(".element__delete").addEventListener("click", handleDeleteItem);
  document.querySelectorAll(".element__bottom-like").forEach((item) => item.addEventListener("click", likeElement))
  return elementItem;
}
initialCards.forEach((item) => listElement.append(generateItem(item)));

/*
Попап профиль
*/
const openPopupEditButton = document.querySelector(".profile__edit-button"); // кнопка открыть попап слева
const popupProfile = document.querySelector("#popup_profile"); // попап профиля
const profileName = document.querySelector(".profile__info-name"); // имя профиля со страницы
const profileJob = document.querySelector(".profile__info-job"); // работа профиля со страницы
const nameInput = document.querySelector(".popup__input_type_name"); // поле ввода имени в форме
const jobInput = document.querySelector(".popup__input_type_job"); // поле ввода работы в форме
const formAddProfile = popupProfile.querySelector(".popup__content"); // форма попап профиля на которой вызывается событие submit

// попап редактировать профиль
function callPopupProfile(e) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
};
openPopupEditButton.addEventListener("click", callPopupProfile);
popupProfile.querySelector(".popup__close").addEventListener("click", () => closePopup(popupProfile));

// отправка формы
function changeProfile(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}
formAddProfile.addEventListener("submit", changeProfile);

/*
Попап добавить картинку
*/
const openPopupAddButton = document.querySelector(".profile__add-button"); // кнопка открыть попап справа
const popupAdd = document.querySelector("#popup_add"); // попап форма добавления картинки
const placeInput = document.querySelector(".popup__input_type_place"); // поле ввода места
const urlInput = document.querySelector(".popup__input_type_url"); // поле ввода ссылки
const formAddCard = popupAdd.querySelector(".popup__content") // форма попап добавление карточки на которой вызывается событие submit 

// попап добавление карточки
function callPopupAdd() {
  openPopup(popupAdd);
  };
openPopupAddButton.addEventListener("click", callPopupAdd);
popupAdd.querySelector(".popup__close").addEventListener("click", () => closePopup(popupAdd));

// добавление карточки
function addNewItem(e) {
  e.preventDefault();
  const card = {
    name: placeInput.value,
    link: urlInput.value,
  }
  closePopup(popupAdd);
  formAddCard.reset();
  listElement.prepend(generateItem(card));
}
formAddCard.addEventListener("submit", addNewItem);

/*
Сердечно
*/
// поставить сердечко
function likeElement(e) {
  e.target.classList.toggle("element__bottom-like_active");
};

//попапа с картинкой
const popupImage = document.querySelector("#popup_image");
const itemImage = document.querySelector(".popup__image");
const itemDisc = document.querySelector(".popup__discription");

popupImage.querySelector(".popup__close").addEventListener("click", () => closePopup(popupImage));

function callPopupImage(e) {
  itemImage.src = e.target.src;
  itemImage.alt = e.target.alt
  itemDisc.textContent = e.target.alt;
  openPopup(popupImage);
};

//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
