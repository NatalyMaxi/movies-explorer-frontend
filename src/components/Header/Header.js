import './Header.css';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header className='header'>
         <Link to='/'>
            <Logo />
         </Link>
         <Navigation />
      </header>
   )
}

export default Header;

// Header — компонент, который отрисовывает шапку сайта на страницу.