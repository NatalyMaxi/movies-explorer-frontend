import './Form.css';

const Form = ({ onSubmit, children, errorMessage }) => {
   return (
      <form
         className='form'
         noValidate
         onSubmit={onSubmit}
         // errorMessage={errorMessage}
      >
         {children}
         <span className='form__error'>{errorMessage}</span>
      </form>
   )
}

export default Form;

// Form — компонент формы для страниц с авторизацией и регистрацией пользователя