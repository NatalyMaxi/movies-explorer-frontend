import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = ({
   onSubmit,
   movies,
   isLoading,
   isFailed,
   isNotFound,
   onCheckbox,
   checked,
}) => {
   return (
      <>
         <main className='movies'>
            <SearchForm
               onSubmit={onSubmit}
               onCheckbox={onCheckbox}
               checked={checked} />
            {isLoading ? (
               <Preloader />
            ) : (
               <MoviesCardList
                  movies={movies}
                  isNotFound={isNotFound}
                  isFailed={isFailed}
               />
            )}
         </main>
      </>
   )
}

export default Movies;

// Movies — компонент страницы с поиском по фильмам.