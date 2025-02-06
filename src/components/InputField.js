import React from 'react';

function InputField({ id, label, value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}:</label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        min="0" // Ensure positive numbers
      />
    </div>
  );
}

export default InputField;