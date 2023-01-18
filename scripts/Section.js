export class Section {
    constructor ({items, renderer},templateSelector){
    this._initialCards = items;
    this._container = document.querySelector(templateSelector);
    }
    renderer(){
        this._initialCards.forEach((item) => {
            let cardElement = createCard(item);
            this.addItem(cardElement);
        });
    }
    addItem(element){
        this._container .append(element);
        
    }
}