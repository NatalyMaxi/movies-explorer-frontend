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
               label='Имя'
               name='name'
               type='text'
               minLength='2'
               maxLength='30'
               required
               autoComplete='on'
               value={values.name || ''}
               error={errors.name || ''}
               onChange={handleChange}
            />
            <AuthField
               label='E-mail'
               name='email'
               type='email'
               required
               autoComplete='on'
               value={values.email || ''}
               error={errors.email || ''}
               onChange={handleChange}
            />
            <AuthField
               label='Пароль'
               name='password'
               type='password'
               minLength='8'
               required
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