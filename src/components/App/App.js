import './App.css';
import React, { useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { Switch, Route, useHistory } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as mainApi from '../../utils/MainApi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function App() {
  // временное решение, пока нет функции изменения состояния
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(false);
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState({});

  // ошибка при регистрации или авторизации
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();


  // Регистрация пользователя
  function handleRegistration({ name, email, password }) {
    mainApi.register({ name, email, password })
      .then(() => {
        handleAuthorization({ email, password });
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          console.log(err)
          setErrorMessage('Пользователь с таким email уже зарегистрирован')
        } else {
          setErrorMessage('Переданы некорректные данные');
        }
      })
  }

  // Авторизация пользователя
  function handleAuthorization({ email, password }) {
    mainApi.authorize({ email, password })
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          setCurrentUser(res);
          localStorage.setItem('jwt', res.token);
          localStorage.setItem('loggedIn', true);
          history.push('./movies');
        }
      })
      .catch((err) => {
        if (err === 'Ошибка: 401') {
          setErrorMessage('Неверный email или пароль')
        } else {
          setErrorMessage('Что-то пошло не так...');
        }
        setLoggedIn(false);
      })
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
          />
          <Route path='/signin'>
            <Login onLogin={handleAuthorization} errorMessage={errorMessage} />
          </Route>
          <Route path='/signup'>
            <Register onRegister={handleRegistration} errorMessage={errorMessage} />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
