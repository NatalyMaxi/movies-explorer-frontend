import { useState } from 'react';


const useForm = () => {
   const [values, setValues] = useState({});
   const [errors, setErrors] = useState({});
   const [isValid, setIsValid] = useState(false);

   const handleChange = (evt) => {
      const input = evt.target;
      const name = input.name;
      const value = input.value;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: input.validationMessage });
      setIsValid(input.closest('form').checkValidity());
   };

   return {
      values,
      errors,
      isValid,
      handleChange,
      setValues
   };
}

export default useForm;
