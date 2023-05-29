import React from 'react';
import PropTypes from 'prop-types';

const AgeInput = ({ age, onChange }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="ageInput">Child's Age:</label>
      <input
         id="ageInput"
         type="number"
         min="0"
         value={age}
         onChange={handleInputChange}
      />
    </div>
  );
};

AgeInput.propTypes = {
  age: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AgeInput;
