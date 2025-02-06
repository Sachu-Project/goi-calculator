import React from 'react';

function YearSlider({ id, label, value, onChange }) {
  return (
    <div className="year-slider">
      <label htmlFor={id}>{label}: {value}</label>
      <input
        type="range"
        id={id}
        min="0"
        max="50"
        step="1"
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

export default YearSlider;