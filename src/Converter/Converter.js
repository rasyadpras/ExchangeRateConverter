import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { RiArrowRightLine } from 'react-icons/ri'
import useCurrency from '../hooks/useCurrency';
import Header from './components/Header';
import OptionRate from './components/OptionRate';
import InputRates from './components/InputRates';
import Display from './components/Display';

const Converter = () => {
    const { 
        isLoading,
        isError,
        amount, 
        setAmount,
        currency1,
        setCurrency1, 
        currency2, 
        setCurrency2,
        currencyList,
        convertedAmount,
        symbolsData, 
        date, 
        time 
    } = useCurrency();

    if (isLoading)
        return (
        <div className='currency-app'>
            <Header />
            <TailSpin color="#4fa94d" wrapperStyle={{position: 'relative', justifyContent: 'center'}} />
        </div>
        );

    if (isError)
        return (
        <div className='currency-app'>
            <Header />
            <h1 className='error'>There is something wrong</h1>
        </div>
        );

    return (
        <div className='currency-app'>
            <Header />
            <div className='body'>
                <InputRates value={amount} onAmountChange={setAmount} />
                <div className='opsi'>
                    <OptionRate symbol={symbolsData.data} currencyList={currencyList} onCurrencyChange={setCurrency1} currency={currency1} />
                    <RiArrowRightLine style={{fontSize:'24', marginRight:'25', marginLeft:'25'}}/>
                    <OptionRate symbol={symbolsData.data} currencyList={currencyList} onCurrencyChange={setCurrency2} currency={currency2} />
                </div>
                <Display amount={amount} currency1={currency1} currency2={currency2} convertedAmount={convertedAmount} date={date} time={time} />
            </div>
        </div>
    )
};

export default Converter;