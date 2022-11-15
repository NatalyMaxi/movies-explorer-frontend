import { Route } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
   const routes = [
      '/',
      '/profile',
      '/movies',
      '/saved-movies',
   ]
   return (
      <Route exact path={routes}>
         <header className='header'>
            <Logo />
            <Navigation loggedIn={loggedIn} />
         </header>
      </Route>
   )
}

export default Header;

// Header — компонент, который отрисовывает шапку сайта на страницу.