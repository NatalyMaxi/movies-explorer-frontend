import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = (
   {
      movies,
      savedMovies,
      onDeleteMovie,
   }
) => {
   return (
      <main className='saved-movies'>
         <SearchForm
         />
         <MoviesCardList
            movies={movies}
            isMoviesPage={false}
            savedMovies={savedMovies}
            onDeleteMovie={onDeleteMovie}
         />
      </main>
   )
}

export default SavedMovies;

// SavedMovies — компонент страницы с сохранёнными карточками фильмов.