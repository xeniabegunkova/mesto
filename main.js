(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._selector=n,this._handleCardClick=r}var n,r;return n=t,(r=[{key:"_takeTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".photos__container").cloneNode(!0)}},{key:"_setLayOut",value:function(){var e=this.element.querySelector(".photos__grid");this.element.querySelector(".photos__title").textContent=this._name,e.src=this._link,e.setAttribute("alt","".concat(this._name)),e.setAttribute("src","".concat(this._link))}},{key:"_setImageListener",value:function(){var e=this;this.element.querySelector(".photos__grid").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_setLikeListener",value:function(){var e=this,t=this.element.querySelector(".photos__like");t.addEventListener("click",(function(){return e._changeLikeStatus(t)}))}},{key:"_changeLikeStatus",value:function(e){e.classList.toggle("photos__like_active")}},{key:"_setDeleteListener",value:function(){var e=this,t=this.element.querySelector(".photos__delete");t.addEventListener("click",(function(){return e._removeCard(t)}))}},{key:"_removeCard",value:function(){this.element.remove()}},{key:"generateCard",value:function(){return this.element=this._takeTemplate(),this._setLayOut(),this._setImageListener(),this._setLikeListener(),this._setDeleteListener(),this.element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=n,this.inputSelector=t.inputSelector,this.fieldSetElement=t.fieldSetElement,this.inactiveButtonClass=t.inactiveButtonClass,this.inputErrorClass=t.inputErrorClass,this.errorClass=t.errorClass,this.errorSelector=t.errorSelector,this.frErrorSelector=t.frErrorSelector,this.submitButtonSelector=t.submitButtonSelector,this.inputList=Array.from(this._formSelector.querySelectorAll(this.inputSelector)),this.buttonEl=this._formSelector.querySelector(this.submitButtonSelector)}var t,r;return t=e,(r=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this.inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this.inputList.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e,t){var n=this._formSelector.querySelector(".".concat(e.id).concat(this.frErrorSelector));e.classList.add(this.inputErrorClass),n.textContent=t,n.classList.add(this.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formSelector.querySelector(".".concat(e.id).concat(this.frErrorSelector));e.classList.remove(this.inputErrorClass),t.classList.remove(this.errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this.buttonEl.classList.add(this.inactiveButtonClass),this.buttonEl.disabled=!0):(this.buttonEl.classList.remove(this.inactiveButtonClass),this.buttonEl.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(this.inputList),this.inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.about=n}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.name.textContent,about:this.about.textContent}}},{key:"setUserInfo",value:function(e){this.name.textContent=e.userName,this.about.textContent=e.career}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){var n,r,o=this,i=t.selector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"==e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this.popup=document.querySelector(i),this.popupClose=this.popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_is-open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.popup.classList.remove("popup_is-open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleCloseClick",value:function(){var e=this;this.popup.addEventListener("mousedown",(function(t){var n=e.popup.querySelector(".popup__content");t.composedPath().includes(n)||e.close()}))}},{key:"setEventListeners",value:function(){var e=this;this.popupClose.addEventListener("click",(function(){e.close(e.popup)})),this._handleCloseClick()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function u(e){var t,n=e.selector,r=e.callbackSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{selector:n}))._callbackSubmitForm=r,t._popupForm=t.popup.querySelector(".popup__form"),t._popupInput=t.popup.querySelectorAll(".popup__input"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._popupInput.forEach((function(t){var n=t.value,r=t.name;e._inputValues[r]=n})),this._inputValues}},{key:"close",value:function(){f(v(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;f(v(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._callbackSubmitForm(e._getInputValues())}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function E(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t,n=e.selector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{selector:n}))._popupImage=t.popup.querySelector(".popup__image"),t._popupImageTitle=t.popup.querySelector(".popup__title-image"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage.alt=e,this._popupImage.src=t,this._popupImageTitle.textContent=e,k(w(u.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s),C={formSelector:".popup__form",inputSelector:".popup__input",fieldSetElement:".popup__fieldset",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_error-active",errorSelector:".popup__input-error",frErrorSelector:"-input-error"},L={},j=document.querySelector(".profile__edit-button"),P=document.querySelector(".profile__name"),I=document.querySelector(".popup__input_sign_name"),q=document.querySelector(".profile__career"),x=document.querySelector(".popup__input_sign_extra"),R=document.querySelector("#editForm").getAttribute("name"),B=document.querySelector(".profile__add-button"),T=document.querySelector("#popup-form-card").getAttribute("name"),V=document.querySelector(".photos__list"),A=new c(P,q),F=new _({selector:"#change-profile-popup",callbackSubmitForm:function(e){A.setUserInfo(e),F.close()}});F.setEventListeners(),j.addEventListener("click",(function(){var e=A.getUserInfo();I.value=e.name,x.value=e.about,L[R].resetValidation(),F.open()}));var D=new _({selector:"#change-card-popup",callbackSubmitForm:function(e){var t=M(e);z.addItem(t),D.close()}});D.setEventListeners(),B.addEventListener("click",(function(){D.open(),L[T].resetValidation()}));var U=new O({selector:".popup_item"});U.setEventListeners();var N=function(e,t){U.open(e,t)},z=new i({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=M(e);z.addItem(t)}},V),M=function(e){return new t(e,"#photos-template",N).generateCard()};z.renderItems(),Array.from(document.querySelectorAll(C.formSelector)).forEach((function(e){var t=new r(C,e),n=e.getAttribute("name");L[n]=t,t.enableValidation()}))})();