import './MoviesCard.css';
import { convertDuration } from '../../utils/utils';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie, savedMovies, onSaveMovie, onDeleteMovie }) => {
   const location = useLocation();
   const isSaved = (movie) => {
      return savedMovies.some(item => item.movieId === movie.id)
   }

   const handleSaveMovie = () => {
      if (isSaved) {
         onDeleteMovie(savedMovies.filter((item) => item.movieId === movie.id)[0]);
      } else {
         onSaveMovie(movie);
      }
   };

   const handleDeleteMovie = () => {
      onDeleteMovie(movie)
   };
   let buttonClassName =
      isSaved
         ? 'card__button card__button_save'
         : 'card__button';
   
   return (
      <li className='card'>
         <div className='card__description-movie'>
            <span className='card__name-movie'>{movie.nameRU}</span>
            <span className='card__duration-movie'>{convertDuration(movie.duration)}</span>
         </div>
         <a
            href={movie.trailerLink}
            className='card__trailer-link'
            target='_blank'
            rel='noreferrer'
         >
            {location.pathname === '/movies' && (
               <img src={`https://api.nomoreparties.co/${movie.image.url}`}
                  alt={movie.nameRU} className='card__poster-movie' />
            )}
            {location.pathname === '/saved-movies' && (
               <img src={movie.thumbnail}
                  alt={movie.nameRU} className='card__poster-movie' />
            )}
         </a>
         {location.pathname === '/movies' && (
            <button
               className={buttonClassName}
               type='button'
               onClick={handleSaveMovie}
            ></button>
         )}
         {location.pathname === '/saved-movies' && (
            <button
               className='card__button card__button_delete'
               type='button'
               onClick={handleDeleteMovie}
            ></button>
         )}
      </li>
   )
}

export default MoviesCard;

// MoviesCard — компонент одной карточки фильма.