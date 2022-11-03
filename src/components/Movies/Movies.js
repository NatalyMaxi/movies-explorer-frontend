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
   searchKeyword
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
                  movies={movies}
                  isNotFound={isNotFound}
                  isServerError={isServerError}
               />
            )}
         </main>
      </>
   )
}

export default Movies;

// Movies — компонент страницы с поиском по фильмам.