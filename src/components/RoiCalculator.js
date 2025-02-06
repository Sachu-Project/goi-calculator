import React, { useState, useEffect } from 'react';
import CurrencyDropdown from './CurrencyDropdown';
import InputField from './InputField';
import YearSlider from './YearSlider';
import PieChart from './PieChart';

function RoiCalculator() {
  const [amountInvested, setAmountInvested] = useState('');
  const [amountReturned, setAmountReturned] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState(1); // Default to 1 year
  const [currency, setCurrency] = useState('USD'); // Default currency
  const [totalGain, setTotalGain] = useState(0);
  const [roiPercentage, setRoiPercentage] = useState(0);
  const [annualRoiPercentage, setAnnualRoiPercentage] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    calculateROI(); // Calculate on initial load and whenever inputs change
  }, [amountInvested, amountReturned, investmentPeriod]);

  const calculateROI = () => {
    if (!amountInvested || !amountReturned) {
      setError('Please enter both Amount Invested and Amount Returned.');
      return;
    }

    const invested = parseFloat(amountInvested);
    const returned = parseFloat(amountReturned);

    if (invested <= 0 || returned <= 0) {
      setError('Amounts must be greater than zero.');
      return;
    }

    setError(''); // Clear any previous errors

    const gain = returned - invested;
    const roi = ((returned - invested) / invested) * 100;
    const annualRoi = roi / investmentPeriod;

    setTotalGain(gain);
    setRoiPercentage(roi);
    setAnnualRoiPercentage(annualRoi);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="roi-calculator">
      {error && <div className="error">{error}</div>}

      <CurrencyDropdown currency={currency} onChange={handleCurrencyChange} />

      <InputField
        id="amount-invested"
        label="Amount Invested"
        value={amountInvested}
        onChange={(e) => setAmountInvested(e.target.value)}
      />

      <InputField
        id="amount-returned"
        label="Amount Returned"
        value={amountReturned}
        onChange={(e) => setAmountReturned(e.target.value)}
      />

      <YearSlider
        id="investment-period"
        label="Investment Period (Years)"
        value={investmentPeriod}
        onChange={(e) => setInvestmentPeriod(e.target.value)}
      />

      <div className="results">
        <p>Total Gain on Investment: {currency} {totalGain.toFixed(2)}</p>
        <p>Return on Investment (ROI): {roiPercentage.toFixed(2)}%</p>
        <p>Simple Annual ROI: {annualRoiPercentage.toFixed(2)}%</p>
      </div>

      <PieChart invested={parseFloat(amountInvested)} returned={parseFloat(amountReturned)} />
    </div>
  );
}

export default RoiCalculator;