export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector
    }

    addItemPrepend(element) {
        this._containerSelector.prepend(element);
    }

    addItemAppend(element) {
        this._containerSelector.append(element)
    }

    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        })
    }

    removeCards(element) {
        element.remove();
    }
}