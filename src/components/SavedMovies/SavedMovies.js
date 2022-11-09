import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({ movies, onDeleteMovie, isSavedMovies, onCheckbox, onSubmit, checked, isNotFound, savedMovies }
) => {
   return (
      <main className='saved-movies'>
         <SearchForm
            onSubmit={onSubmit}
            onCheckbox={onCheckbox}
            checked={checked}
         />
         <MoviesCardList
            movies={movies}
            isMoviesPage={false}
            onDeleteMovie={onDeleteMovie}
            isSavedMovies={isSavedMovies}
            isNotFound={isNotFound}
            savedMovies={savedMovies}
         />
      </main>
   )
}

export default SavedMovies;

// SavedMovies — компонент страницы с сохранёнными карточками фильмов.