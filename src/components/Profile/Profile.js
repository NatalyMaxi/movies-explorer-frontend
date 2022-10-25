import './Profile.css';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import { useState } from 'react';

const Profile = () => {
   // eslint-disable-next-line
   const [disabled, setDisabled] = useState(true)
   // eslint-disable-next-line
   const [isEffective, setIsEffective] = useState(false)
   return (
      <section className='profile'>
         <h3 className='profile__title'>Привет, Наталья!</h3>
         <form className='profile__form'>
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
                  disabled={disabled}
               />
            </div>
            <span className="profile__input-error">упс</span>
            <div className='profile__line'></div>
            <div className='profile__field'>
               <label className='profile__label'>E-mail</label>
               <input
                  id='profile-email'
                  className='profile__input'
                  name='email'
                  type='email'
                  disabled={disabled}
               />
            </div>
            <span className="profile__input-error">упс</span>
            {isEffective ? <p className="profile__status profile__status_type_effective">Данные успешно изменены!</p> :
               <span className="profile__status profile__status_type_error">Что-то пошло не так...</span>}
            <div className='profile__button-container'>
               {disabled ? (
                  <>
                     <div className='profile__button-container'>
                        <button
                           className='profile__button profile__button_type_edit'
                           type='submit'
                        >
                           Редактировать
                        </button>
                        <button
                           className='profile__button profile__button_type_exit'
                           type='button'
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