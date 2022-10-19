import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

const Logo = () => {
   return (
      <Link to='/'>
         <img className='logo' src={logo} alt='Логотип' />
      </Link>
   )

}

export default Logo;

// Logo — компонент логотипа.