const popupElement = document.querySelector(".popup"); // попап форма
const popupOpenButtonElement = document.querySelector(".profile__edit-button"); // кнопка открыть попап
const popupCloseButtonElement = popupElement.querySelector(".popup__close"); // кнопка закрыть попап
const popupSaveButton = popupElement.querySelector(".popup__save"); // кнопка сохранить в попапе, вызывает событие submit
let profileName = document.querySelector(".profile-info-name"); // имя профиля со страницы
let profileJob = document.querySelector(".profile-info-job"); // работы профиля со страницы
let formElement = document.querySelector(".popup__content"); // форма попап, на которой вызывается событие submit
let jobInput = document.querySelector(".input__text_type_job"); // поле ввода работы в форме
let nameInput = document.querySelector(".input__text_type_name"); // поле ввода имени в форме
const likeButtonElemnt = document.querySelectorAll(".element__bottom-like");


// функция открытия попап
const togglePopupVisibility = function (event) {
    jobInput.placeholder = profileJob.textContent;
    nameInput.placeholder = profileName.textContent;
  popupElement.classList.toggle("popup_is-opened");
 };
popupOpenButtonElement.addEventListener("click", togglePopupVisibility);

// функция закрытия попапа
const closePopup = function () {
    popupElement.classList.remove("popup_is-opened");
};
popupCloseButtonElement.addEventListener("click", closePopup);

//сердечно
const likeElement = function (e) {
    e.target.classList.toggle('element__bottom-like_active');
}
likeButtonElemnt.forEach((item)=>item.addEventListener('click',likeElement));


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let job = jobInput.value;
    let name = nameInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector(".profile-info-name");
    let profileJob = document.querySelector(".profile-info-job");
    // Вставьте новые значения с помощью textContent
    profileJob.textContent  = job;
    profileName.innerHTML = `<h1 class="profile-info-name">${name} <button class="profile__edit-button"></button></h1>`;
    popupElement.classList.remove("popup_is-opened");
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);





