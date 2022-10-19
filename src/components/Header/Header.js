import './Header.css';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = ({ loggedIn }) => {
   return (
      <header className='header'>
         <Link to='/'>
            <Logo />
         </Link>
         <Navigation loggedIn={loggedIn} />
      </header>
   )
}

export default Header;

// Header — компонент, который отрисовывает шапку сайта на страницу.