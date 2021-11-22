import { optionsMainApi } from './constants';

class MainApi {
  constructor(optionsMainApi) {
    this._baseUrl = optionsMainApi.baseUrl;
    this._headers = optionsMainApi.headers;
  }

  _checkResponse(res) {
    if (!res.ok) {
      return new Error(res.status);
    }
    return res.json();
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ password, email })
    })
      .then(this._checkResponse);
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(this._checkResponse);
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ password, email, name })
    })
      .then(this._checkResponse);
  };

  tokenCheck() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(this._checkResponse);
  }

// getInitialCards() {
//   return fetch(`${this._baseUrl}/cards`, {
//     method: 'GET',
//     credentials: 'include',
//     headers: this._headers
//   })
//     .then(this._checkResponse);
// }

getUserInfo() {
  return fetch(`${this._baseUrl}/users/me`, {
    credentials: 'include',
    headers: this._headers
  })
    .then(this._checkResponse);
}

updateUserInfo(user) {
  return fetch(`${this._baseUrl}/users/me`, {
    headers: this._headers,
    method: 'PATCH',
    credentials: 'include',
    body: JSON.stringify({
      name: user.name,
      about: user.about,
    })
  })
    .then(this._checkResponse);
}

updateUserAvatar({ link }) {
  return fetch(`${this._baseUrl}/users/me/avatar`, {
    headers: this._headers,
    method: 'PATCH',
    credentials: 'include',
    body: JSON.stringify({
      avatar: link,

    })
  })
    .then(this._checkResponse);
}

addNewCard(card) {
  return fetch(`${this._baseUrl}/cards`, {
    headers: this._headers,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      name: card.name,
      link: card.link,
    })
  })
    .then(this._checkResponse);;
}

deleteCard(id) {
  return fetch(`${this._baseUrl}/cards/${id}`, {
    headers: this._headers,
    credentials: 'include',
    method: 'DELETE',
  })
    .then(this._checkResponse);
}

_likeCard(id) {
  return fetch(`${this._baseUrl}/cards/${id}/likes`, {
    headers: this._headers,
    credentials: 'include',
    method: 'PUT',
  })
    .then(this._checkResponse);
}

_removeLikeCard(id) {
  return fetch(`${this._baseUrl}/cards/${id}/likes`, {
    headers: this._headers,
    credentials: 'include',
    method: 'DELETE',
  })
    .then(this._checkResponse);
}

changeLikeCardStatus(id, isChange) {
  if (isChange) {
    return this._likeCard(id);
  } else {
    return this._removeLikeCard(id);
  }
}
}

const mainApi = new MainApi(optionsMainApi);

export default mainApi;