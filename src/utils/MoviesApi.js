import { checkResponse, MOVIE_URL } from './Constants';

class MoviesApi {
   constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
   }

   getMovies() {
      return fetch(this._baseUrl)
         .then((res) => checkResponse(res));
   }
}

const moviesApi = new MoviesApi({ MOVIE_URL });

export default moviesApi;