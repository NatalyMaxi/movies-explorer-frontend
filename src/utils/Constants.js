export const MOVIE_API = 'https://api.nomoreparties.co/beatfilm-movies';

export const checkResponse = (res) => {
   if (res.ok) {
      return res.json()
   }
   return Promise.reject(`Ошибка: ${res.status}`)
};