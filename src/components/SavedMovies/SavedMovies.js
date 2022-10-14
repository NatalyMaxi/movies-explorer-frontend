import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {
   return (
      <section className="saved-movies">
         <SearchForm />
         <MoviesCardList /> 
   </section>
)
}

export default SavedMovies;

// SavedMovies — компонент страницы с сохранёнными карточками фильмов.