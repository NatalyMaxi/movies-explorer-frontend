import './SearchForm.css';
import icon from '../../images/icon.svg';
import find from '../../images/find.svg'
import Checkbox from '../Checkbox/Checkbox';

const SearchForm = () => {
   return (
      <section className='search'>
         <form
            className='search__form'
            noValidate
         >
            <label className='search__input-label'>
               <img className='search__icon search__icon_place_input' src={icon} alt='Иконка лупа' />
            </label>
            <input
               className='search__input'
               id='movie'
               name='movie'
               type='text'
               placeholder='Фильм'
               minLength='1'
               maxLength='20'
               required
            />
            <span className='search__form-error'></span>
            <button className='search__button' type='submit'>
               <img className='search__icon' src={find} alt='Иконка лупа' />
            </button>
            <Checkbox />
         </form>
      </section>
   )
};

export default SearchForm;