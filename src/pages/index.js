import './../pages/index.css';
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { Popup } from "../scripts/components/Popup.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithDelete } from "../scripts/components/PopupWithDelete.js";

import { UserInfo } from "../scripts/components/UserInfo.js";
import {
  validationConfig, popupEditButton,
  popupProfile, profileName, profileAbout, nameInput,
  aboutInput, formAddCard, popupAvatar, formEditAvatar,
  popupEditAvatarButton, profileAvatar
} from "../scripts/constants.js";
import { api } from '../scripts/components/api.js';

export const formEditProfile = popupProfile.querySelector(".popup__content"); // форма попап профиля на которой вызывается событие submit
export { api } from "../scripts/components/api.js";


//валидаторы
const validatorFormEditProfile = new FormValidator(validationConfig, formEditProfile);
validatorFormEditProfile.enableValidation();

const validatorFormEditAvatar = new FormValidator(validationConfig, formEditAvatar);
validatorFormEditAvatar.enableValidation();

const validatorFormAddCard = new FormValidator(validationConfig, formAddCard);
validatorFormAddCard.enableValidation();

//данные профиля
const userInfo = new UserInfo({ profileName, profileAbout, profileAvatar });


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
  popupEditProfile.renderLoading(true)
  api.updateUserData(data)
    .then(res => {
      userInfo.setUserInfo(res)
    })
    .catch(error => {
      console.log('Ошибочка вышла')
    })
    .finally(() => {
      popupEditProfile.renderLoading(false);
    });
  ;
}

//попап редактировать аватар
const popupEditAvatar = new PopupWithForm("#popup_avatar", changeAvatar);
popupEditAvatarButton.addEventListener("click", () => {
  popupEditAvatar.open();
});
popupEditAvatar.setEventListeners()

//функция изменение аватара
function changeAvatar(data) {
  api.updateAvatar(data)
    .then(res => {
      document.querySelector(profileAvatar).style.backgroundImage = `url('${res.avatar}')`;
    })
    .catch(error => {
      console.log('Аватар не удалось сменить(')
    })
    ;
}

//Попап просмотреть картинку
const popupWithImage = new PopupWithImage("#popup_image")
popupWithImage.setEventListeners()

//создание карточки из класса
function createCard(data) {
  const card = new Card(
    {
      data,
      userId: userInfo.getUserId(),
      handleCardClick: (name, link) => {
        popupWithImage.open(name, link);
      },
      handleDeleteClick: () => {
        popupDelete.open();
        popupDelete.delcard = function () {
          api.deleteCard(card._id)
            .then(() => {
              card.deleteCard()
              popupDelete.close()
            }).catch(error => console.log('Карточка не удалена'));
        }

      },
      handleLikeClick: () => {
        if (card.checkLikeState()) {
          api.doDislike(card._id)
            .then(card.dislikeElement())
            .catch(error => console.log('Лайк не удалился'))
        } else {
          api.doLike(card._id)
            .then(card.likeElement())
            .catch(error => {
              console.log('Не лайкнулась')
            })
        }

      }

    }, "#element-template");
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
  popupAddImage.renderLoading(true);
  api.addNewCard(data)
    .then(res => {
      cardList.addItem(createCard(res))
    })
    .catch(error => {
      console.log('Карточка не добавлена')
    })
    .finally(() => {
      popupAddImage.renderLoading(false);
    });
  ;
}

// открытие попапа удалить карточку
const popupDelete = new PopupWithDelete('#popup_delete');
popupDelete.setEventListeners();

// загрузка данных 
Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, initialCards]) => {

    userInfo.setUserInfo(userData);
    cardList.renderItems(initialCards);
  })
  .catch(() => {
    (error) => console.log(error);
  });


