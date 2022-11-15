import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = ({
   onSubmit,
   movies,
   isLoading,
   isNotFound,
   onCheckbox,
   checked,
   isServerError,
   searchKeyword,
   onDeleteMovie,
   onSaveMovie,
   isSavedMovies,
   savedMovies
}) => {
   return (
      <>
         <main className='movies'>
            <SearchForm
               onSubmit={onSubmit}
               onCheckbox={onCheckbox}
               checked={checked}
               defaultValue={searchKeyword}
            />
            {isLoading ? (
               <Preloader />
            ) : (
               <MoviesCardList
                  isMoviesPage={true}
                  movies={movies}
                  isNotFound={isNotFound}
                  isServerError={isServerError}
                  onDeleteMovie={onDeleteMovie}
                  onSaveMovie={onSaveMovie}
                  isSavedMovies={isSavedMovies}
                  savedMovies={savedMovies}
               />
            )}
         </main>
      </>
   )
}

export default Movies;

// Movies — компонент страницы с поиском по фильмам.