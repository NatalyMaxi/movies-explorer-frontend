import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = (

) => {
   return (
      <main className='saved-movies'>
         <SearchForm
         />
         <MoviesCardList
            isMoviesPage={false}
            />
      </main>
   )
}

export default SavedMovies;

// SavedMovies — компонент страницы с сохранёнными карточками фильмов.