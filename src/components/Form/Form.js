import './Form.css';

const Form = ({ children, errorMessage }) => {
   return (
      <div className='form'>
         {children}
         <span className="form__error">{errorMessage}</span>
      </div>
   )
}

export default Form;

// Form — компонент формы для страниц с авторизацией и регистрацией пользователя