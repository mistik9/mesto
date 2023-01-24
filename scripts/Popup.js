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

