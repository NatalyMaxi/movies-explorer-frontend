import Auth from "../Auth/Auth";
import AuthField from "../AuthField/AuthField";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import Form from "../Form/Form";


const Register = () => {
   return (
      <Auth
         title='Добро пожаловать!'
         subtitle='Уже зарегистрированы?'
         route='/signin'
         link='Войти'
      >
         <Form>
            <AuthField
               label='Имя'
               name='name'
               type='text'
               error=''
               minLength="2"
               maxLength="30"
               required
            />
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
               error='Что-то пошло не так...'
               minLength='8'
               required
            />
         </Form>
         <ButtonSubmit
            text='Зарегистрироваться'
         />
      </Auth>
   )
}


export default Register;

// Register — компонент страницы регистрации.