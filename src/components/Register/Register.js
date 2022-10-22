import { useFormValidation } from '../../hooks/useForm';
import Auth from '../Auth/Auth';
import AuthField from '../AuthField/AuthField';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import Form from '../Form/Form';


const Register = ({ onRegister, errorMessage }) => {
   const { values, handleChange, errors, isValid } = useFormValidation();

   function handleSubmit(evt) {
      evt.preventDefault();
      if (!values.password || !values.email || !values.name) {
         return;
      }
      onRegister(values);
   }

   return (
      <Auth
         title='Добро пожаловать!'
         subtitle='Уже зарегистрированы?'
         route='/signin'
         link='Войти'
      >
         <Form
            onSubmit={handleSubmit}
            errorMessage={errorMessage.name || ''}
         >
            <AuthField
               id='name'
               label='Имя'
               name='name'
               type='text'
               minLength='2'
               maxLength='30'
               required
               autoComplete="name"
               value={values.name || ''}
               error={errors.name || ''}
               onChange={handleChange}
            />
            <AuthField
               id='email'
               label='E-mail'
               name='email'
               type='email'
               required
               autoComplete="email"
               value={values.email || ''}
               error={errors.email || ''}
               onChange={handleChange}
            />
            <AuthField
               id='password'
               label='Пароль'
               name='password'
               type='password'
               minLength='8'
               required
               autoComplete="password"
               value={values.password || ''}
               error={errors.password || ''}
               onChange={handleChange}
            />
         </Form>
         <ButtonSubmit
            type='submit'
            text='Зарегистрироваться'
            disabled={!isValid}
         />
      </Auth>
   )
}


export default Register;

// Register — компонент страницы регистрации.