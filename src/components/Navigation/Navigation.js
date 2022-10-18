import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import PopupNavigation from '../PopupNavigation/PopupNavigation'

const Navigation = ({ loggedIn }) => {
   const [isPopupNavigation, setIsPopupNavigation] = useState(false);

   const closePopups = () => {
      setIsPopupNavigation(false)
   }

   const openPopup = () => {
      setIsPopupNavigation(true);
   };
   return (
      <>
         {loggedIn ? (
            <>
               <div className='navigation'>
                  <nav className='navigation__links'>
                     <NavLink to='/movies' className='navigation__link' activeClassName='navigation__link_active'>Фильмы</NavLink>
                     <NavLink to='/saved-movies' className='navigation__link' activeClassName='navigation__link_active'>Сохранённые фильмы</NavLink>
                  </nav>
               </div>
               <nav className='navigation'>
                  <Link to='/profile'>
                     <button className='navigation__btn' type='button'>Аккаунт</button>
                  </Link>
               </nav>
               <button className='navigation__btn-nav' type='button' onClick={openPopup} />
            </>
         ) : (
            <nav className='navigation'>
               <Link to='/signup' className='navigation__link navigation__link_unregistered'>Регистрация</Link>
               <Link to='/signin'>
                     <button className='navigation__button' type='button'>
                     Войти
                  </button>
               </Link>
            </nav>
         )
         }
         <PopupNavigation isOpen={isPopupNavigation} onClose={closePopups} />
      </>
   )
}

export default Navigation;

// Navigation — компонент, который отвечает за меню навигации на сайте.