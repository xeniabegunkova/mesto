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

/* Посмотреть потом (можно лучше):
Лучше массив карточек передавать не как параметр конструктора, а как параметр метода renderItems. 
Это пригодится в следующем спринте, когда данные будут приходить с сервера и для их отображения можно 
будет вызвать cardsSection.renderItems(cards), передав полученные данные как параметр метода.*/