import { useQueries } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchRates, fetchSymbols } from '../Converter/api/fetchData';

const useCurrency = () => {
    const [amount, setAmount] = useState(1);
    const [currency1, setCurrency1] = useState("USD");
    const [currency2, setCurrency2] = useState("IDR");

    const [ratesData, symbolsData] = useQueries({
        queries: [
            {
                queryKey:["rates", currency1],
                queryFn: () => fetchRates(currency1),
                staleTime: Infinity,
                select: ({ rates, date, timestamp }) => {
                    return { rates, date, timestamp };
                },
                keepPreviousData: true
            },
            {
                queryKey: ["symbols"],
                queryFn: fetchSymbols,
                staleTime: Infinity,
                select: ({ symbols }) => symbols
            }
        ]
    });
    const isLoading = [ratesData,symbolsData].some((query) => query.isLoading);
    const isError = [ratesData,symbolsData].some((query) => query.isError);

    const convertedAmount = (ratesData.data?.rates[currency2] * amount).toFixed(2);

    const date = new Date(ratesData.data?.date).toLocaleDateString("id-ID");
    const time = new Date(ratesData.data?.timestamp).toLocaleTimeString("id-ID");

    const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : [];
    return { 
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
    };
};

export default useCurrency;