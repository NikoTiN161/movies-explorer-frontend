import { optionsMoviesApi } from './constants';

class MoviesApi {
  constructor(optionsMoviesApi) {
    this._baseUrl = optionsMoviesApi.baseUrl;
    this._headers = optionsMoviesApi.headers;
  }

  _checkResponse(res) {
    if (!res.ok) {
      return new Error(res.status);
    }
    return res.json();
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

}

const moviesApi = new MoviesApi(optionsMoviesApi);

export default moviesApi;