export class UserInfo {
    constructor( name, about ) { //принимает два показателя
        this.name = name;
        this.about = about;
    }

    getUserInfo() { //принимает в себя имя и 
        const info = { //данные о пользователе
            name: this.name.textContent,
            about: this.about.textContent
        }
        return info; //возвращаем данные о пользователе 
    }

    setUserInfo(element) { //метод принимает новые данные и добавляет на страницу
        this.name.textContent = element.userName;
        this.about.textContent = element.career;
    }
}