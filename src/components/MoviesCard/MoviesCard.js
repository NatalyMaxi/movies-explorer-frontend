import './MoviesCard.css';
import movie from '../../images/poster-movie.png'

const MoviesCard = () => {
   return (
      <div className='card'>
         <div className='card__description-movie'>
            <span className='card__name-movie'>33 слова о дизайне</span>
            <span className='card__duration-movie'>1ч 17м</span>
         </div>
         <img className='card__poster-movie' src={movie} alt='Постер фильма' />
         <button className='card__button' />
         <button className='card__button_saved' />
         <button className='card__button_delete' />
      </div>
   )
}

export default MoviesCard;

// MoviesCard — компонент одной карточки фильма.