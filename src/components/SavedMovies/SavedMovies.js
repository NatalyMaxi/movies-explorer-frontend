import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({ movies, onDeleteMovie, onSaveMovie, isSavedMovies }
) => {
   return (
      <main className='saved-movies'>
         <SearchForm
         />
         <MoviesCardList
            movies={movies}
            isMoviesPage={false}
            onDeleteMovie={onDeleteMovie}
            onSaveMovie={onSaveMovie}
            isSavedMovies={isSavedMovies}
         />
      </main>
   )
}

export default SavedMovies;

// SavedMovies — компонент страницы с сохранёнными карточками фильмов.