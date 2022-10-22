import { checkResponse, MOVIE_API } from './Constants';

class MoviesApi {
   constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
   }

   getMovies() {
      return fetch(this._baseUrl)
         .then((res) => checkResponse(res));
   }
}

const moviesApi = new MoviesApi({MOVIE_API});

export default moviesApi;