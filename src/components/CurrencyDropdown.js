import React from 'react';

function CurrencyDropdown({ currency, onChange }) {
  return (
    <div className="currency-dropdown">
      <label htmlFor="currency">Currency:</label>
      <select id="currency" value={currency} onChange={onChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        {/* Add more currencies as needed */}
      </select>
    </div>
  );
}

export default CurrencyDropdown;