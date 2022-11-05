export const BASE_URL = 'https://api.domainname.nataly.nomoredomains.icu';
export const MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const checkResponse = (res) => {
   if (res.ok) {
      return res.json()
   }
   return Promise.reject(`Ошибка: ${res.status}`)
};