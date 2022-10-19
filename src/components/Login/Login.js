import Auth from "../Auth/Auth";
import AuthField from "../AuthField/AuthField";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import Form from "../Form/Form";


const Login = () => {
   return (
      <Auth
         title='Рады видеть!'
         subtitle='Ещё не зарегистрированы?'
         route='/signup'
         link='Регистрация'
      >
         <Form>
            <AuthField
               label='E-mail'
               name='email'
               type='email'
               error=''
               required
            />
            <AuthField
               label='Пароль'
               name='password'
               type='password'
               error=''
               minLength='8'
               required
            />
         </Form>
         <ButtonSubmit
            text='Войти'
         />
      </Auth>
   )
}


export default Login;

// Login — компонент страницы авторизации.