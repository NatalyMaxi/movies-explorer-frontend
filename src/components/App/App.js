import './App.css';
import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { Switch, Route, useHistory, Redirect, } from 'react-router-dom';
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
  const [isServerError, setIsServerError] = useState(false); //Произошла ошибка при поиске фильмов
  const [isNotFound, setIsNotFound] = useState(false); // Фильмы по запросу не найдены
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки

  //* Переменные состояния по фильмам
  const [allMovies, setAllMovies] = useState([]); // Данные всех фильмов
  const [movies, setMovies] = useState([]); // Список найденных фильмов
  const [foundMovies, setFoundMovies] = useState([]); // Список фильмов по критериям
  const [savedMovies, setSavedMovies] = useState([]); // Сохраненные фильмы
  const [filteredMovies, setFilteredMovies] = useState(savedMovies); // Отфильтрованные сохраненные фильмы

  //* Переменные состояния для формы поиска фильмов
  const [selectedCheckbox, setSelectedCheckbox] = useState(false); // Флажок короткометражек не выбран
  const [searchKeyword, setSearchKeyword] = useState('') // Ключевое слово
  const [selectedCheckboxSavedMovies, setSelectedCheckboxSavedMovies] = useState(false); // Флажок короткометражек не выбран на странице Сохраненные фильмы
  const [searchKeywordSavedMovies, setSearchKeywordSavedMovies] = useState(''); // Ключевое слово на странице Сохраненных фильмов

  const history = useHistory();

  // отслеживание состояния переменных
  useEffect(() => {
    handleTokenCheck();
    setSearchKeyword(localStorage.getItem('searchKeyword' || ''));
    setSelectedCheckbox(localStorage.getItem('selectedCheckbox' || '') === 'true');
    setSelectedCheckboxSavedMovies(localStorage.getItem('selectedCheckboxSavedMovies') === 'true')
    setSearchKeyword(localStorage.getItem('searchKeywordSavedMovies' || ''));
    if (JSON.parse(localStorage.getItem('foundMovies'))) {
      setMovies(JSON.parse(localStorage.getItem('foundMovies')));
    }
  }, []);

  // Поиск короткометражныx фильмов
  const searchShortMovies = (movies) => {
    return movies.filter((movie) => movie.duration <= 40);
  };

  // меняем состояние чекбокса на короткометражки
  const handleChangeCheckbox = () => {
    setSelectedCheckbox(!selectedCheckbox);
    console.log(selectedCheckbox)
    if (!selectedCheckbox) {
      setMovies(searchShortMovies(foundMovies));
      if (foundMovies.length === 0) {
        setIsNotFound(true);
      }
    } else {
      setMovies(foundMovies);
    }
    localStorage.setItem('selectedCheckbox', !selectedCheckbox);
  };

  // Найдем фильмы по ключевому слову
  const findMovies = (movies, keyword, checkbox) => {
    const moviesКeywordSearch = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyword.toLowerCase())
    })
    if (checkbox) {
      return searchShortMovies(moviesКeywordSearch);
    } else {
      return moviesКeywordSearch;
    }
  }

  // Поиск короткометражек на странице Сохраненных фильмов
  const handleShortFilms = () => {
    if (!selectedCheckboxSavedMovies) {
      setSelectedCheckboxSavedMovies(true);
      localStorage.setItem('selectedCheckboxSavedMovies', true);
      setSavedMovies(searchShortMovies(filteredMovies));
      searchShortMovies(filteredMovies).length === 0 ? setIsNotFound(true) : setIsNotFound(false);
    } else {
      setSelectedCheckboxSavedMovies(false);
      localStorage.setItem('selectedCheckboxSavedMovies', false);
      filteredMovies.length === 0 ? setIsNotFound(true) : setIsNotFound(false);
      setSavedMovies(filteredMovies);
    }
  }

  // Найдем фильмы по критериям
  const handleSetFoundMovies = (movies, keyword, checkbox) => {
    setIsLoading(true);
    const moviesList = findMovies(movies, keyword, false);
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

  // Проверить сохране ли фильм
  const isSavedMovies = (movie) => {
    return savedMovies.some(item => item.movieId === movie.id && item.owner === currentUser._id)
  }

  //- Обработка запроса на странице Сохраненные фильмы
  const handleSearchSubmit = (searchQuery) => {
    localStorage.setItem('searchKeywordSavedMovies', searchQuery); // Записываем в сторедж введенное ключевое слово на странице Сохраненных фильмов
    localStorage.setItem('selectedCheckboxSavedMovies', selectedCheckboxSavedMovies); // Записываем в сторедж выставленное положение флажка на странице сохраненных фильмов
    const moviesList = findMovies(savedMovies, searchQuery, selectedCheckboxSavedMovies);
    setSearchKeywordSavedMovies(searchQuery);
    if (moviesList.length === 0) {
      setIsNotFound(true);
      setSavedMovies(moviesList)
    } else {
      setIsNotFound(false);
      setFilteredMovies(moviesList);
      setSavedMovies(moviesList);
    }
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

  //- Обработать запрос на сохранение фильма на страницу "Сохраненные фильмы"
  const handleSaveMovie = (movie) => {
    const jwt = localStorage.getItem('jwt');
    mainApi.saveMovie(movie, jwt)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  //- Обработать запрос на удаления фильма с страницы "Сохраненные фильмы"
  const handleDeleteMovie = (movie) => {
    setIsLoading(true);
    const jwt = localStorage.getItem('jwt');
    mainApi.deleteMovie(movie._id, jwt)
      .then((movie) => {
        const updatedSavedMovies = savedMovies.filter(item => movie._id !== item._id);
        localStorage.setItem('savedMovies', updatedSavedMovies);
        setSavedMovies(updatedSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //! Регистрация пользователя
  const handleRegistration = ({ name, email, password }) => {
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
  const handleAuthorization = ({ email, password }) => {
    mainApi.authorize({ email, password })
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
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
        localStorage.clear();
        setCurrentUser(null);
      })
      .finally(() => {
        setTimeout(() => setErrorMessage(''), 2000);
      });
  }

  //! Проверяем токен пользователя и получение его контента
  const handleTokenCheck = () => {
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
      .catch((err) => {
        console.log(err);
      })
    mainApi
      .getSavedMovies(jwt)
      .then((data) => {
        setLoggedIn(true);
        setSavedMovies(data)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  //! Изменить данные пользователя в профиле

  const handleUpdateUserData = (data) => {
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
    setMovies([]);
    setSavedMovies([]);
    setFoundMovies(false);
    setSelectedCheckbox(false)
    setSearchKeyword('')
    setFoundMovies([])
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
            onSaveMovie={handleSaveMovie}
            onDeleteMovie={handleDeleteMovie}
            isSavedMovies={isSavedMovies}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            movies={savedMovies}
            onDeleteMovie={handleDeleteMovie}
            isSavedMovies={isSavedMovies}
            onSubmit={handleSearchSubmit}
            onCheckbox={handleShortFilms}
            searchKeyword={searchKeywordSavedMovies}
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
          <Route exact path='/signin'>
            {!loggedIn ? (
              <Login onLogin={handleAuthorization} errorMessage={errorMessage} />
            ) : (
              <Redirect to='/' />
            )}
          </Route>
          <Route exact path='/signup'>
            {!loggedIn ? (
              <Register onRegister={handleRegistration} errorMessage={errorMessage} />
            ) : (
              <Redirect to='/' />
            )}
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
