import './Form.css';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

const Form = ({ onSubmit, children, errorMessage, text, disabled }) => {
   return (
      <form
         className='form'
         noValidate
         onSubmit={onSubmit}
      // errorMessage={errorMessage}
      >
         <div className='form__container'>
            {children}
            <span className='form__error'>{errorMessage}</span>
         </div>
         <ButtonSubmit
            type='submit'
            text={text}
            disabled={disabled}
         />
      </form>
   )
}

export default Form;

// Form — компонент формы для страниц с авторизацией и регистрацией пользователя