import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = () => {
   return (
      <section className='cards'>
         <p className='cards__missing'></p>
         <ul className='cards__container'>
            <MoviesCard/>
         </ul>
         <div className='cards__button-container'>
            <button className='cards__button' type='button'>Ещё</button>
         </div>
      </section>
   )
}

export default MoviesCardList;

// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.