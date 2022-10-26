import './Profile.css';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import useForm from '../../hooks/useForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useEffect, useState } from 'react';

const Profile = ({ onUpdateUserData, onSignOut, errorMessage }) => {
   const [isDisabledInput, setIsDisabledInput] = useState(true)
   const [isSuccessfully, setIsSuccessfully] = useState(false)
   const currentUser = useContext(CurrentUserContext);
   const { values, errors, isValid, handleChange, setValues, resetForm } = useForm();

   useEffect(() => {
      setValues(currentUser)
   }, [currentUser, setValues])

   function handleSubmit(evt) {
      evt.preventDefault();
      onUpdateUserData({
         name: values.name,
         email: values.email
      })
      setTimeout(() => {
         setIsDisabledInput((state) => !state)
         setIsSuccessfully((state) => !state)
      }, 1500);
      resetForm()
   }

   function handleUpdatProfile() {
      setIsDisabledInput((state) => !state);
   }

   function handleSave() {
      setIsSuccessfully((state) => !state);
   }

   return (
      <section className='profile'>
         <h3 className='profile__title'>Привет, {currentUser.name}!</h3>
         <form
            className='profile__form'
            noValidate
            onSubmit={handleSubmit}
         >
            <div className='profile__field'>
               <label className='profile__label'>Имя</label>
               <input
                  id='profile-name'
                  className='profile__input'
                  name='name'
                  type='text'
                  minLength='2'
                  maxLength='30'
                  required
                  disabled={isDisabledInput}
                  value={values.name || ''}
                  onChange={handleChange}
               />
            </div>
            {errors?.name && <span className="profile__input-error">{errors.name}</span>}
            <div className='profile__line'></div>
            <div className='profile__field'>
               <label className='profile__label'>E-mail</label>
               <input
                  id='profile-email'
                  className='profile__input'
                  name='email'
                  type='email'
                  disabled={isDisabledInput}
                  value={values.email || ''}
                  onChange={handleChange}
               />
            </div>
            {errors?.name && <span className="profile__input-error">{errors.email}</span>}
            {isSuccessfully && <p className="profile__status profile__status_type_effective">{errorMessage}</p>}
            <div className='profile__button-container'>
               {isDisabledInput ? (
                  <>
                     <div className='profile__button-container'>
                        <button
                           className='profile__button profile__button_type_edit'
                           type='button'
                           onClick={handleUpdatProfile}
                        >
                           Редактировать
                        </button>
                        <button
                           className='profile__button profile__button_type_exit'
                           type='button'
                           onClick={onSignOut}
                        >
                           Выйти из аккаунта
                        </button>
                     </div>
                  </>
               ) : (
                  <div className='profile__button-container'>
                     <ButtonSubmit
                        type='submit'
                        text='Сохранить'
                        disabled={!isValid}
                        onClick={handleSave}
                     />
                  </div>
               )}
            </div>
         </form>
      </section>
   )
}

export default Profile;

// Profile — компонент страницы изменения профиля.