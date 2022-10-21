import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Movies = ({ loggedIn }) => {
   return (
      <>
         <Header loggedIn={loggedIn} />
         <main className='movies'>
            <SearchForm />
            <MoviesCardList isMovies={true} />
         </main>
         <Footer />
      </>


   )
}

export default Movies;

// Movies — компонент страницы с поиском по фильмам.