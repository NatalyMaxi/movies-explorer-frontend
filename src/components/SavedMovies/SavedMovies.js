import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = (
   movies,
   isNotFound,
   onCheckbox,
   checked,
   isServerError,
) => {
   return (
      <main className='saved-movies'>
         <SearchForm
            onCheckbox={onCheckbox}
            checked={checked}
            defaultValue=''
         />
            <MoviesCardList
               movies={movies}
               isNotFound={isNotFound}
               isServerError={isServerError}
            />
      </main>
   )
}

export default SavedMovies;

// SavedMovies — компонент страницы с сохранёнными карточками фильмов.