import React from 'react';

const Display = ({amount, currency1, currency2, convertedAmount, date, time}) => {
    return (
        <div>
            <p className='result'>{amount} {currency1} = {convertedAmount} {currency2}</p>
            <p className='detail'>Data updated on {date} {time}</p>
        </div>
    )
};

export default Display;