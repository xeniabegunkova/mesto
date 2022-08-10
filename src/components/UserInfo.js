export class UserInfo {
    constructor({ nameSelector, aboutSelector, imageSelector }) { //принимает два показателя
        this.name = document.querySelector(nameSelector)
        this.about = document.querySelector(aboutSelector)
        this.image = document.querySelector(imageSelector)
    }

    getUserInfo() { //принимает в себя имя и 
        const info = { //данные о пользователе
            name: this.name.textContent,
            about: this.about.textContent
        }
        return info; //возвращаем данные о пользователе 
    }

    setUserInfo(data) { //метод принимает новые данные и добавляет на страницу
        this.name.textContent = data.name;
        this.about.textContent = data.about;
    }

    setUserAvatar(data) { //метод принимает данные о картинке(аватарке)
        this.image.src = data.avatar
    }

    setUserId(data) { //метод принимает в себя айди пользователя (мое)
        this.userId = data._id
    }

    takeUserId() { //метод возвразает данные об айди
        return this.userId
    }
}