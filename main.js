(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{d:()=>X,x:()=>J});var t=document.querySelector(".profile__name"),n=document.querySelector(".profile__mission"),r=document.querySelector(".profile__avatar-container"),o=r.querySelector(".profile__avatar"),c=document.querySelector(".profile__add-button"),a=document.querySelector(".profile__edit-button"),i=document.querySelector(".popup_type_edit-profile"),u=document.querySelector(".popup_type_edit-avatar"),l=document.querySelector(".form_type_edit-profile"),s=l.querySelector(".form__button"),d=document.querySelector(".form_type_edit-avatar"),f=d.querySelector(".form__item_type_url-avatar"),m=d.querySelector(".form__button"),p=document.querySelector(".form__item_type_name"),_=document.querySelector(".form__item_type_mission"),y=document.querySelectorAll(".popup"),v=document.querySelector(".popup_type_error"),h=v.querySelector(".popup__title_for_error"),b=v.querySelector(".popup__text-error"),S=document.querySelector(".form_type_new-place"),C=S.querySelector(".form__button"),q=document.querySelector(".cards__list"),x=S.querySelector(".form__item_type_place"),E=S.querySelector(".form__item_type_url"),g=document.querySelector(".popup_type_new-place"),L=document.querySelector(".popup_for_delete-card"),k=L.querySelector(".form__button"),O="card__like_active",j=document.querySelector(".popup_type_open-img"),A=j.querySelector(".popup__title"),w=j.querySelector(".popup__image"),U="popup_opened",P={formSelector:".form",errorClass:"form__error-message_visible",inputSelector:".form__item",inputErrorClass:"form__item_invalid",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled"},T={baseUrl:"https://nomoreparties.co/v1/plus-cohort-6/",headers:{authorization:"65d32b7f-c1f2-44b3-9a5c-d1cd8d3f9a2c","Content-Type":"application/json"}};function B(e){e.classList.add(U),document.addEventListener("keydown",I)}function D(e){e.classList.remove(U),document.removeEventListener("keydown",I),k.removeEventListener("click",N)}function I(e){Object.is(e.key,"Escape")&&D(document.querySelector(".".concat(U)))}var N,J,H,M,z,R=["inputSelector","errorClass","inputErrorClass"];function $(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function F(e,t){e.classList.add(t),e.setAttribute("disabled","disabled")}function G(e){return e.ok?e.json():Promise.reject(e.status)}function K(e,t){e.textContent=t.likes.length}function Q(e,t,n){n?e.append(t):e.prepend(t)}function V(e){var t=document.querySelector(".template-card").content.querySelector(".card-element").cloneNode(!0),n=t.querySelector(".card__image"),r=t.querySelector(".card__title"),o=t.querySelector(".card__like"),c=t.querySelector(".card__trash-icon"),a=t.querySelector(".card__like-counter");return n.src=e.link,n.alt=e.name,r.textContent=e.name,Object.is(e.owner._id,J)&&c.classList.add("card__trash-icon_visible"),e.likes.some((function(e){return Object.is(e._id,J)}))&&o.classList.add(O),K(a,e),n.addEventListener("click",(function(){return function(e){A.textContent=e.name,w.alt="Изображение ".concat(e.name),w.src=e.link,B(j)}(e)})),o.addEventListener("click",(function(t){return function(e,t,n){var r;e.target.classList.contains(O)?(r=t._id,fetch("".concat(T.baseUrl,"cards/likes/").concat(r),{method:"DELETE",headers:T.headers}).then(G)).then((function(t){e.target.classList.remove(O),K(n,t)})).catch((function(e){B(v),X(e,h,b),console.log("Error: ".concat(e))})):function(e){return fetch("".concat(T.baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:T.headers}).then(G)}(t._id).then((function(t){e.target.classList.add(O),K(n,t)})).catch((function(e){B(v),X(e,h,b),console.log("Error: ".concat(e))}))}(t,e,a)})),c.addEventListener("click",(function(t){k.textContent="Да",B(L),k.addEventListener("click",N=function(){k.textContent="Удаление...",function(e,t){var n;(n=t,fetch("".concat(T.baseUrl,"cards/").concat(n),{method:"DELETE",headers:T.headers}).then(G)).then((function(){e.target.closest(".card-element").remove(),D(L)})).catch((function(e){B(v),X(e,h,b),console.log("Error: ".concat(e))}))}(t,e._id)})})),t}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(e,t,n){switch(e){case 400:t.textContent="Проверьте введенный адресс",n.textContent="Код ошибки 400";break;case 403:t.textContent="Доступ запрещен",n.textContent="Код ошибки 403. Проверьте логин и пароль.";break;case 404:t.textContent="Ресурс не найден",n.textContent="Код ошибки: 404. Проверьте URL ";break;case 500:t.textContent="Ошибка сервера",n.textContent="Попробуйте повторить позже";break;default:t.textContent="Ошибка",n.textContent=" ".concat(e," Попробуйте повторить запрос.")}}a.addEventListener("click",(function(){s.textContent="Сохранить",p.value=t.textContent,_.value=n.textContent,B(i)})),c.addEventListener("click",(function(){C.textContent="Создать",B(g)})),l.addEventListener("submit",(function(e){e.preventDefault(),s.textContent="Сохранение...",function(e,t){return fetch("".concat(T.baseUrl,"users/me"),{method:"PATCH",headers:T.headers,body:JSON.stringify({name:e.value,about:t.value})}).then(G)}(p,_).then((function(e){t.textContent=e.name,n.textContent=e.about,D(i)})).catch((function(e){B(v),X(e,h,b),s.textContent="Сохранить",console.log("Error: ".concat(e))}))})),S.addEventListener("submit",(function(e){var t,n;e.preventDefault(),C.textContent="Сохранение...",(t=x,n=E,fetch("".concat(T.baseUrl,"cards"),{method:"POST",headers:T.headers,body:JSON.stringify({name:t.value,link:n.value})}).then(G)).then((function(e){Q(q,V(e)),D(g),S.reset(),F(C,P.inactiveButtonClass)})).catch((function(e){B(v),X(e,h,b),C.textContent="Создать",console.log("Error: ".concat(e))}))})),r.addEventListener("click",(function(){m.textContent="Сохранить",B(u)})),d.addEventListener("submit",(function(e){var t;e.preventDefault(),m.textContent="Сохранение...",(t=f.value,fetch("".concat(T.baseUrl,"users/me/avatar"),{method:"PATCH",headers:T.headers,body:JSON.stringify({avatar:t})}).then(G)).then((function(e){o.src=e.avatar,D(u),d.reset(),F(m,P.inactiveButtonClass)})).catch((function(e){B(v),X(e,h,b),m.textContent="Сохранить",console.log("Error: ".concat(e))}))})),y.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&D(e),t.target.classList.contains("popup__close-button")&&D(e)}))})),Promise.all([fetch("".concat(T.baseUrl,"cards"),{headers:T.headers}).then(G),fetch("".concat(T.baseUrl,"users/me"),{headers:T.headers}).then(G)]).then((function(e){var r,c,a=(c=2,function(e){if(Array.isArray(e))return e}(r=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return c}}(r,c)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(r,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];J=u._id,function(e){e.forEach((function(e){Q(q,V(e),!0)}))}(i),t.textContent=u.name,n.textContent=u.about,o.src=u.avatar})).catch((function(e){B(v),X(e,h,b),console.log("Ошибка: ".concat(e))})),M=(H=P).formSelector,z=$(H,["formSelector"]),Array.from(document.querySelectorAll(M)).forEach((function(e){!function(e,t){var n=t.inputSelector,r=t.errorClass,o=t.inputErrorClass,c=$(t,R),a=Array.from(e.querySelectorAll(n));a.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n,r){var o=e.querySelector("#error-".concat(t.id));t.validity.valid?function(e,t,n,r){e.classList.remove(n),t.classList.remove(r),e.textContent=""}(o,t,n,r):function(e,t,n,r){e.classList.add(n),t.classList.add(r),e.textContent=t.validationMessage}(o,t,n,r)}(e,t,r,o),function(e,t,n){var r=n.submitButtonSelector,o=n.inactiveButtonClass,c=e.querySelector(r);!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?function(e,t){e.classList.remove(t),e.removeAttribute("disabled")}(c,o):F(c,o)}(e,a,c)}))}))}(e,z)}))})();