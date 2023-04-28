import React from 'react';
import useFlags from '../../hooks/useFlags';
import Avatar from 'react-avatar';

const OptionRate = ({symbol, currencyList, onCurrencyChange, currency}) => {
  const { flagUrl } = useFlags(currency);

  return (
    <div className='option'>
      <Avatar src={flagUrl} size='24'/>
      <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencyList.map((currency) => (
          <option key={currency} value={currency}>
            {currency} - {symbol[currency]}
          </option>
        ))};
      </select>
    </div>
  )
};

export default OptionRate;