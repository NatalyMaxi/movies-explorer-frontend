import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = () => {
   return (
      <section className="movies">
         <SearchForm />
         <MoviesCardList/>
      </section>
   )
}

export default Movies;

// Movies — компонент страницы с поиском по фильмам.