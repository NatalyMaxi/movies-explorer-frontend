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


function App() {
  // временное решение, пока нет функции изменения состояния
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(true);
   // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState({});

  // ошибка при регистрации или авторизации
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  function handleRegistration(name, email, password) {
    mainApi.register(name, email, password)
      .then(() => {
        history.push('/movies');
      })
      .catch((err) => {
        setErrorMessage('Что-то пошло не так...')
        console.log(err.message)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
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
            <Login />
          </Route>
          <Route path='/signup'>
            <Register onRegister={handleRegistration} errorMessage={errorMessage} />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
  </CurrentUserContext.Provider>
    
  );
}

export default App;
