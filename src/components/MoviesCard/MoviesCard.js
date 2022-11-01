import './MoviesCard.css';
import { convertDuration } from '../../utils/utils';

const MoviesCard = (props) => {
   const nameFilm = props.movie.nameRU
   const durationFilm = props.movie.duration
   const banner = `https://api.nomoreparties.co/${props.movie.image.url}`
   const trailerLinkFilm = props.movie.trailerLink
   return (
      <li className='card'>
         <div className='card__description-movie'>
            <span className='card__name-movie'>{nameFilm}</span>
            <span className='card__duration-movie'>{convertDuration(durationFilm)}</span>
         </div>
         <a
            href={trailerLinkFilm}
            className='card__trailer-link'
            target='_blank'
            rel='noreferrer'
         >
            <img src={banner} alt={nameFilm} className='card__poster-movie' />
         </a>
         <button className='card__button' type='button' />
         <button className='card__button_saved' type='button' />
         <button className='card__button_delete' type='button' />
      </li>
   )
}

export default MoviesCard;

// MoviesCard — компонент одной карточки фильма.