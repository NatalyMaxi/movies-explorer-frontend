import './SearchForm.css';
import icon from '../../images/icon.svg';
import find from '../../images/find.svg'
import Checkbox from '../Checkbox/Checkbox';
import { useState, useEffect } from 'react';

const SearchForm = ({ onSubmit, onCheckbox, checked, defaultValue, }) => {
   const [errorText, setErrorText] = useState('');
   const [keyword, setKeyword] = useState('');
   const [isFormValid, setIsFormValid] = useState(false);

   useEffect(() => {
      setKeyword(defaultValue)
   }, [defaultValue])

   const handleChange = (evt) => {
      setKeyword(evt.target.value);
      setIsFormValid(evt.target.closest('form').checkValidity());
   };

   const handleSubmit = (evt) => {
      evt.preventDefault();
      if (keyword) {
         onSubmit(keyword);
      } else {
         return setErrorText('Нужно ввести ключевое слово')
      }
   };

   return (
      <section className='search'>
         <form
            className='search__form'
            noValidate
            onSubmit={handleSubmit}
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
               onChange={handleChange}
               value={keyword || ''}
            />
            <span className='search__form-error'>{!isFormValid && errorText}</span>
            <button className='search__button' type='submit'>
               <img className='search__icon' src={find} alt='Иконка лупа' />
            </button>
            <Checkbox onCheckbox={onCheckbox} checked={checked} />
         </form>
      </section>
   )
};

export default SearchForm;