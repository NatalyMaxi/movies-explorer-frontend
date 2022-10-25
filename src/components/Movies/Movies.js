import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
   return (
      <>
         <main className='movies'>
            <SearchForm />
            <MoviesCardList isMovies={true} />
         </main>
      </>


   )
}

export default Movies;

// Movies — компонент страницы с поиском по фильмам.