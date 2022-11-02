import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const SavedMovies = (
   movies,
   isLoading,
   isNotFound,
   onCheckbox,
   checked,
   isServerError,
   searchКeyword
) => {
   return (
      <main className='saved-movies'>
         <SearchForm
            onCheckbox={onCheckbox}
            checked={checked}
            defaultValue=''
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
   )
}

export default SavedMovies;

// SavedMovies — компонент страницы с сохранёнными карточками фильмов.