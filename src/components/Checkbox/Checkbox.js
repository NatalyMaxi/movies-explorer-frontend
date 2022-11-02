import './Checkbox.css';

const Checkbox = ({ onCheckbox, checked }) => {
   return (
      <div className='checkbox'>
         <input
            className='checkbox__input'
            name='checkbox'
            id='checkbox'
            type='checkbox'
            checked={checked}
            onChange={onCheckbox}
         />
         <label className='checkbox__label'>Короткометражки</label>
      </div>
   );
}

export default Checkbox;

// Checkbox — компонент для чекбокса короткометражки.