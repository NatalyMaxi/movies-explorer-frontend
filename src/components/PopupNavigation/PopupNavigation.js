import './PopupNavigation.css';
import { NavLink, Link } from 'react-router-dom';

const PopupNavigation = () => {
   return (
      <div className='popup'>
         <div className='popup__overlay'>
            <div className='popup__container'>
               <button type='button' className='popup__close' />
               <ul className='popup__list'>
                  <li className='popup__item'>
                     <NavLink exact to='/' className='popup__link' activeClassName='popup__link_active'>
                        Главная
                     </NavLink>
                  </li>
                  <li className='popup__item'>
                     <NavLink to='/movies' className='popup__link' activeClassName='popup__link_active'>
                        Фильмы
                     </NavLink>
                  </li>
                  <li className='popup__item'>
                     <NavLink to='/saved-movies' className='popup__link' activeClassName='popup__link_active'>
                        Сохранённые фильмы
                     </NavLink>
                  </li >
               </ul>
               <Link to='/profile'>
                  <button className='popup__button'>Аккаунт</button>
               </Link>
            </div>
         </div>
      </div>
   )
};

export default PopupNavigation;

// PopupNavigation — компонент, для отображинии навигации на не больших разрешениях экрана.