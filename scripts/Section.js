export class Section {
    constructor({ items, renderer }, containerSelector) { //тренажер. урок 3-6
        this._renderedItems = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector
    }

    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        })
    }
    
    addItem(element) {
        this._containerSelector.prepend(element);
    }
}