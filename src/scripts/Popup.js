export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);

    }

    open() {
        this._popupSelector.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    setEventListeners() {
        this._popupSelector.addEventListener("mousedown", (e) => {
            if (e.target === e.currentTarget || e.target.classList.contains("popup__close")) {
                this.close();
            };
        });
    };

    _handleEscClose(e) {
        if ((e.key) === "Escape") {
            this.close();
        }
    }
}

