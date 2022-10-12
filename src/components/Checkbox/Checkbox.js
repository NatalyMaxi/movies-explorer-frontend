import './Checkbox.css';

const Checkbox = () => {
   return (
      <div className="checkbox">
         <input
            className="checkbox__input"
            id="checkbox"
            type="checkbox"
         />
         <label className="checkbox__label" for="checkbox">Короткометражки</label>
      </div>
   );
}

export default Checkbox;

// Checkbox — компонент для чекбокса короткометражки.