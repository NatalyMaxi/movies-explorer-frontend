import './App.css';
import React, { useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { Switch, Route } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  // временное решение, пока нет функции изменения состояния
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(true);
   // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState({});

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
            <Register />
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
