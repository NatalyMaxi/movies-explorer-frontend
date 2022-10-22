import { checkResponse, BASE_URL } from './Constants';

const headers = {
   Accept: 'application/json',
   'Content-Type': 'application/json',
};

// Авторизация пользователя
export const authorize = ({ email, password }) => {
   return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password }),
   }).then((res) => checkResponse(res))
}

// Регистрация пользователя
export const register = ({ name, email, password }) => {
   return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name, email, password }),
   }).then((res) => checkResponse(res))
}

// Получаем информацию о пользователе
export const getUserInfo = (jwt) => {
   return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
         ...headers,
         'Authorization': `Bearer ${jwt}`,
      }
   }).then((res) => checkResponse(res))
};

// Обновляем информацию о пользователе
export const updateUserInfo = (data, jwt) => {
   return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
         ...headers,
         'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify({
         name: data.name,
         email: data.email,
      }),
   }).then((res) => checkResponse(res))
};

// Сохраняем фильм пользователя
export const saveMovie = (movie, jwt) => {
   delete movie.id
   delete movie.owner
   delete movie._id
   return fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
         ...headers,
         'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify(movie),
   }).then((res) => checkResponse(res))
};

// Получаем все сохраненные фильмы пользователя
export const getSavedMovies = (jwt) => {
   return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
         ...headers,
         'Authorization': `Bearer ${jwt}`,
      }
   }).then((res) => checkResponse(res))
};

// Удаляем фильм пользователя
export const deleteMovie = (id, jwt) => {
   return fetch(`${BASE_URL}/movies/${id}`, {
      method: 'DELETE',
      headers: {
         ...headers,
         'Authorization': `Bearer ${jwt}`,
      },
   }).then((res) => checkResponse(res))
};