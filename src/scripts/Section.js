export class Section {
    constructor({ items, renderer }, selector) {
        this._initialCards = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);

    }
    renderItems() {
        this._initialCards.forEach(item =>
            this._renderer(item)
        );
    }
    addItem(item) {
        this._container.prepend(item);
    }
}
