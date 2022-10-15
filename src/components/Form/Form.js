import './Form.css';

const Form = ({ children }) => {
   return (
      <div className='form'>
         {children}
      </div>
   )
}

export default Form;

// Form — компонент формы для страницы с авторизацией пользователей