import './App.css';
import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { Switch, Route, useHistory, } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  //* Переменные состояния по пользователю
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isUserDataUpdateStatus, setIsUserDataUpdateStatus] = useState('');

  //* Переменные состояния ошибок и загрузок
  const [errorMessage, setErrorMessage] = useState();
  const [isServerError, setIsServerError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки

  //* Переменные состояния по фильмам
  const [allMovies, setAllMovies] = useState([]); // Данные всех фильмов
  const [movies, setMovies] = useState([]); // Список найденных фильмов
  const [foundMovies, setFoundMovies] = useState([]); // Список фильмов по критериям

  //* Переменные состояния для формы поиска фильмов
  const [selectedCheckbox, setSelectedCheckbox] = useState(false); // Флажок короткометражек не выбран
  const [searchKeyword, setSearchKeyword] = useState('')
  const history = useHistory();

  useEffect(() => {
    handleTokenCheck();
    setSearchKeyword(localStorage.getItem('searchKeyword' || ''));
    setSelectedCheckbox(localStorage.getItem('selectedCheckbox' || '') === 'true');
    if (JSON.parse(localStorage.getItem('foundMovies'))) {
      setMovies(JSON.parse(localStorage.getItem('foundMovies')));
    }
  }, []);

  // Поиск короткометражныx фильмов
  const searchShortMovies = (movies) => {
    return movies.filter((movie) => movie.duration <= 40);
  };

  // меняем состояние чекбокса на короткометражки
  const handleChangeCheckbox = (evt) => {
    setSelectedCheckbox(!selectedCheckbox);
    console.log(selectedCheckbox)
  };

  // Найдем фильмы по ключевому слову
  function findMovies(movies, keyword, checkbox) {
    const moviesКeywordSearch = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyword.toLowerCase())
    });

    if (checkbox) {
      return searchShortMovies(moviesКeywordSearch);
    } else {
      return moviesКeywordSearch;
    }
  }

  // Найдем фильмы по критериям
  const handleSetFoundMovies = (movies, keyword, checkbox) => {
    setIsLoading(true);
    const moviesList = findMovies(movies, keyword, checkbox);
    if (moviesList.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
    setMovies(moviesList);
    setFoundMovies(
      checkbox ? searchShortMovies(moviesList) : moviesList
    );
    localStorage.setItem('foundMovies', JSON.stringify(moviesList));
    setTimeout(() => setIsLoading(false), 1000)
  }

  //- Обработаем запрос пользователя по поиску фильмов
  const handleRequestMovies = (keyword) => {
    localStorage.setItem('searchKeyword', keyword); // Записываем в сторедж введенное ключевое слово
    localStorage.setItem('selectedCheckbox', selectedCheckbox); // Записываем в сторедж выставленное положение флажка
    if (allMovies.length === 0) { // если фильмов в сторедж нет, сделаем запрос к BeatfilmMoviesApi
      setIsLoading(true);
      moviesApi
        .getAllMovies()
        .then((movies) => {
          setIsLoading(true);
          localStorage.setItem('allMovies', JSON.stringify(movies)); // Записываем в сторедж все полученные фильмы с BeatfilmMoviesApi
          setAllMovies(movies);
          handleSetFoundMovies(movies, keyword, selectedCheckbox) // Находим фильмы по запросу и выставленным критериям
        })
        .catch((err) => {
          setIsServerError(true)
        })
        .finally(() => {
          setTimeout(() => setIsLoading(false), 1000)
        });
    } else {
      handleSetFoundMovies(allMovies, keyword, selectedCheckbox);
    }
  };

  //! Регистрация пользователя
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
      .finally(() => {
        setTimeout(() => setErrorMessage(''), 2000);
      });
  }

  //! Авторизация пользователя
  function handleAuthorization({ email, password }) {
    mainApi.authorize({ email, password })
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          setCurrentUser(res);
          localStorage.setItem('jwt', res.token);
          handleTokenCheck()
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
      .finally(() => {
        setTimeout(() => setErrorMessage(''), 2000);
      });
  }

  //! Проверяем токен пользователя и получение его контента
  function handleTokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      return;
    }
    mainApi
      .getUserInfo(jwt)
      .then((data) => {
        setCurrentUser(data)
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  //! Изменить данные пользователя в профиле

  function handleUpdateUserData(data) {
    const jwt = localStorage.getItem('jwt');
    mainApi.updateUserInfo(data, jwt)
      .then((res) => {
        setCurrentUser(res.data)
        setIsUserDataUpdateStatus('Данные успешно обновлены!')
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setIsUserDataUpdateStatus('Пользователь с таким email уже зарегистрирован')
        } else {
          setIsUserDataUpdateStatus('Что-то пошло не так...');
        }
      })
      .finally(() => {
        setTimeout(() => setIsUserDataUpdateStatus(''), 2000);
      });
  }

  //! Выйти из аккаунта
  const handleSignOut = () => {
    localStorage.clear()
    setLoggedIn(false);
    history.push('/');
  };

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
            movies={movies}
            isLoading={isLoading}
            onCheckbox={handleChangeCheckbox}
            checked={selectedCheckbox}
            isNotFound={isNotFound}
            isServerError={isServerError}
            onSubmit={handleRequestMovies}
            searchKeyword={searchKeyword}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            movies={foundMovies}
            isLoading={isLoading}
            onCheckbox={handleChangeCheckbox}
            checked={selectedCheckbox}
            isNotFound={isNotFound}
            isServerError={isServerError}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            onUpdateUserData={handleUpdateUserData}
            onSignOut={handleSignOut}
            isUserDataUpdateStatus={isUserDataUpdateStatus}
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
