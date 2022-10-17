import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

const Navigation = ({ loggedIn }) => {
   return (
      <>
         {loggedIn ? (
            <>
               <div className='navigation'>
                  <nav className='navigation__links'>
                     <NavLink to='/movies' className='navigation__link' activeClassName='navigation__link_active'>Фильмы</NavLink>
                     <NavLink to='//saved-movies' className='navigation__link'>Сохранённые фильмы</NavLink>
                  </nav>
               </div>
               <div className='navigation'>
                  <Link to='/profile'>
                     <button className='navigation__btn'></button>
                  </Link>
               </div>
            </>
         ) : (
            <div className='navigation'>
                  <Link to='/signup' className='navigation__link navigation__link_unregistered'>Регистрация</Link>
               <Link to='/signin'>
                  <button className='navigation__button'>
                     Войти
                  </button>
               </Link>
            </div>
         )
         }
      </>
   )
}

export default Navigation;

// Navigation — компонент, который отвечает за меню навигации на сайте.