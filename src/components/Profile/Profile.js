import './Profile.css';
import Header from '../Header/Header'

const Profile = ({ loggedIn }) => {
   return (
      <>
         <Header loggedIn={loggedIn} />
         <section className='profile'>
            <h3 className='profile__title'>Привет, Наталья!</h3>
            <form className='profile__form'>
               <div className='profile__field'>
                  <label className='profile__label'>Имя</label>
                  <input
                     className='profile__input'
                     name='name'
                     type='text'
                  />
               </div>
               <div className='profile__line'></div>
               <div className='profile__field'>
                  <label className='profile__label'>Имя</label>
                  <input
                     className='profile__input'
                     name='email'
                     type='email'
                  />
               </div>
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
            </form>
         </section>
      </>
   )
}

export default Profile;

// Profile — компонент страницы изменения профиля.