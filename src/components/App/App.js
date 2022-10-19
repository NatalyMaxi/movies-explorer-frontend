import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';

function App() {
  // временное решение, пока нет функции изменения состояния
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies loggedIn={loggedIn} />
        </Route>
        <Route exact path='/saved-movies'>
          <SavedMovies loggedIn={loggedIn} />
        </Route>
        <Route path='/profile'>
          <Profile loggedIn={loggedIn} />
        </Route>
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
  );
}

export default App;
