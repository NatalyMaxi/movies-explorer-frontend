import './AuthField.css';

const AuthField = ({ label, error, name, type, ...rest }) => {
   return (
      <div className='auth-field'>
         <label className='auth-field__label'>{label}</label>
         <input
            className='auth-field__input'
            name={name}
            type={type}
            {...rest}
         />
         <span className='auth-field__error'>{error}</span>
         
      </div>
   )
}

export default AuthField;

// Input — компонент инпут для формы авторизации пользователей