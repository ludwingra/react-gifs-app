import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [InputValue, setInputValue] = useState('');

  const HandleInputChange = ( e ) => {
    setInputValue(e.target.value)
  }

  const HandleSubmit = (e) => {
    e.preventDefault();

    if( InputValue.trim().length > 2 ) {
      setCategories(cats => [ ...cats, InputValue ]);
      setInputValue('');
    }

  }

  return (
    <form onSubmit={ HandleSubmit }>
      <input 
        type="text"
        value={ InputValue }
        onChange={ HandleInputChange }
      />
    </form>
  )
}


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}