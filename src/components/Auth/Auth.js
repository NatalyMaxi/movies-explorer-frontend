import { Link } from 'react-router-dom';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import Form from '../Form/Form';
import Logo from '../Logo/logo';
import './Auth.css';


const Auth = ({ title, subtitle, route, link }) => {
   return (
      <section className='auth'>
         <Logo />
         <h2 className='auth__title'>{title}</h2>
         <Form />
         <ButtonSubmit />
         <p className='auth__subtitle'>
            {subtitle}
            <Link to={route} className='auth__link'>{link}</Link>
         </p>
      </section>
   )

}

export default Auth;

// Auth — компонент страницы с авторизацией пользователей