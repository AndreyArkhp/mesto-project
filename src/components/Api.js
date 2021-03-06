export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getAppInfo() {
    return Promise.all([this._getCards(), this._getUserData()]);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  postDataCard(inputTitle, inputUrl) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: inputTitle,
        link: inputUrl,
      }),
    }).then(this._checkResponse);
  }

  sendUsersData(inputName, inputMission) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: inputName,
        about: inputMission,
      }),
    }).then(this._checkResponse);
  }

  setLike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  setAvatar(url) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _getCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  _getUserData() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }
}
