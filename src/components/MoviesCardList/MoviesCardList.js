import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = () => {
   return (
      <section className="cards">
         <div className="cards__container">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
         </div>
         <button className="cards__button">Ещё</button>
      </section>
   )
}

export default MoviesCardList;

// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.