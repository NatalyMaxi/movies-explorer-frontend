import './Header.css';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
   return (
      <header className='header'>
         <Logo />
         <Navigation />
      </header>
   )
}

export default Header;

// Header — компонент, который отрисовывает шапку сайта на страницу.