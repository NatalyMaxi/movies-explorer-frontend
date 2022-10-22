const { NODE_ENV } = process.env
export const BASE_URL = (NODE_ENV === 'production') ? 'https://api.domainname.nataly.nomoredomains.icu' : 'http://localhost:3000';
export const MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const checkResponse = (res) => {
   if (res.ok) {
      return res.json()
   }
   return Promise.reject(`Ошибка: ${res.status}`)
};