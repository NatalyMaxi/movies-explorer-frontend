import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({ movies, onDeleteMovie, onSaveMovie, isSavedMovies, onCheckbox, onSubmit, checked, isNotFound, isServerError, searchKeyword, }
) => {
   return (
      <main className='saved-movies'>
         <SearchForm
            onSubmit={onSubmit}
            onCheckbox={onCheckbox}
            checked={checked}
            defaultValue={searchKeyword}
         />
         <MoviesCardList
            movies={movies}
            isMoviesPage={false}
            onDeleteMovie={onDeleteMovie}
            onSaveMovie={onSaveMovie}
            isSavedMovies={isSavedMovies}
            isNotFound={isNotFound}
            isServerError={isServerError}
         />
      </main>
   )
}

export default SavedMovies;

// SavedMovies — компонент страницы с сохранёнными карточками фильмов.