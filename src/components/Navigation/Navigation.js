import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
   return (
      <div className='navigation'>
         <Link to='/sign-up' className='navigation__link'>Регистрация</Link>
         <Link to='/signin'>
            <button className='navigation__button'>
               Войти
            </button>
         </Link>
      </div>
   )
}

export default Navigation;

// Navigation — компонент, который отвечает за меню навигации на сайте.