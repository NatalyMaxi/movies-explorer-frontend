import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import { useWindowSize } from "../../hooks/useWindowsSize";
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({ movies, isNotFound, isServerError, isMoviesPage, onDeleteMovie, onSaveMovie, isSavedMovies }) => {
   const windowWidth = useWindowSize();
   const [initialCards, setInitialCards] = useState({});
   const [moreCards, setMoreCards] = useState({});
   const location = useLocation();

   useEffect(() => {
      if (windowWidth >= 1280) {
         setInitialCards(12);
         setMoreCards(3);
      }
      if (windowWidth < 1280 && windowWidth >= 768) {
         setInitialCards(8);
         setMoreCards(2);
      }
      if (windowWidth < 768 && windowWidth >= 480) {
         setInitialCards(6);
         setMoreCards(2);
      }
      if (windowWidth < 480) {
         setInitialCards(5);
         setMoreCards(1);
      }
   }, [windowWidth])

   let classIsNotFound = isNotFound
      ? 'cards__missing_visible'
      : 'cards__missing';

   let classServerError = isServerError
      ? 'cards__missing_visible'
      : 'cards__missing';

   function handleMoreButtonClick() {
      setInitialCards(initialCards + moreCards);
   }

   return (
      <section className='cards'>
         <p className={classIsNotFound}>Ничего не найдено.</p>
         <p className={classServerError}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
         <ul className='cards__container'>
            {movies.slice(0, initialCards).map((movie, i) => {
               return (
                  <MoviesCard
                     movie={movie}
                     key={isMoviesPage ? movie.id : movie.movieId}
                     onDeleteMovie={onDeleteMovie}
                     onSaveMovie={onSaveMovie}
                     isSavedMovies={isSavedMovies}
                     isMoviesPage={isMoviesPage}
                  />
               );
            })}
         </ul>
         {location.pathname === '/movies' && (
            <div className='cards__button-container'>
               <button
                  type='button'
                  onClick={handleMoreButtonClick}
                  className={
                     movies.length <= 7 || initialCards >= movies.length
                        ? 'cards__button_hidden'
                        : 'cards__button'
                  }>Ещё</button>
            </div>
         )}
      </section>
   )
}

export default MoviesCardList;

// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.