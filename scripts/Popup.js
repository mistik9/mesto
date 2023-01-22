export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add("popup_opened");
        document.addEventListener("keydown", (e) => {
            this._handleEscClose(e)
        });

    }

    close() {

        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener("keydown", (e) => {
            this._handleEscClose(e)
        });

    }

    setEventListeners() {
        this._popupSelector.addEventListener("mousedown", (e) => {
            if (e.target === e.currentTarget || e.target.classList.contains("popup__close")) {
                this.close();
            };
        });
    };



    _handleEscClose(e) {

        if (e.key === "Escape") {
            this.close(e);
        }
    }
}

// //функция закрытия попапа
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closeByEsc);
// };


// //функция открытия попапа
// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closeByEsc);
// }

// //закрытие попапа по клавише эск
// function closeByEsc(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_opened");
//     closePopup(openedPopup);
//   }
// }

// //закрытие попапа на оверлей и кнопку закрыть
// document.querySelectorAll(".popup").forEach(popup => {
//   popup.addEventListener("mousedown", (evt) => {
//     if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close")) {
//       closePopup(popup);
//     };
//   });
// });