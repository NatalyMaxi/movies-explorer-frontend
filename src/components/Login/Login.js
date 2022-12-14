import useForm from '../../hooks/useForm';
import Auth from "../Auth/Auth";
import AuthField from "../AuthField/AuthField";
import Form from "../Form/Form";


const Login = ({ onLogin, errorMessage }) => {
   const { values, handleChange, resetForm, errors, isValid } = useForm();

   function handleSubmit(evt) {
      evt.preventDefault();
      if (!values.password || !values.email) {
         return;
      }
      onLogin(values);
      resetForm()
   }

   return (
      <Auth
         title='Рады видеть!'
         subtitle='Ещё не зарегистрированы?'
         route='/signup'
         link='Регистрация'
      >
         <Form
            onSubmit={handleSubmit}
            errorMessage={errorMessage || ''}
            text='Войти'
            disabled={!isValid}
         >
            <AuthField
               id='email'
               label='E-mail'
               name='email'
               type='email'
               required
               autoComplete='email'
               value={values.email || ''}
               error={errors.email || ''}
               onChange={handleChange}
               pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
            />
            <AuthField
               id='password'
               label='Пароль'
               name='password'
               type='password'
               minLength='8'
               required
               autoComplete='password'
               value={values.password || ''}
               error={errors.password || ''}
               onChange={handleChange}
            />
         </Form>
      </Auth>
   )
}


export default Login;

// Login — компонент страницы авторизации.