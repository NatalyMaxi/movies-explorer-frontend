import './MoviesCard.css';
import { convertDuration } from '../../utils/utils';

const MoviesCard = (props) => {
   return (
      <li className='card'>
         <div className='card__description-movie'>
            <span className='card__name-movie'>{props.name}</span>
            <span className='card__duration-movie'>{convertDuration(props.duration)}</span>
         </div>
         <a
            href={props.trailerLink}
            className='card__trailer-link'
            target='_blank'
            rel='noreferrer'
         >
            <img src={props.thumbnail} alt={props.name} className='card__poster-movie' />
         </a>
         <button className='card__button' type='button' />
         <button className='card__button_saved' type='button' />
         <button className='card__button_delete' type='button' />
      </li>
   )
}

export default MoviesCard;

// MoviesCard — компонент одной карточки фильма.