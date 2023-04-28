import React from 'react';

const InputRates = ({value, onAmountChange}) => {
  return (
    <div className='input'>
        <input type='number' placeholder='Input amount here ...' value={value} min={0} onChange={(e) => onAmountChange(e.target.value)}/>
    </div>
  )
};

export default InputRates;