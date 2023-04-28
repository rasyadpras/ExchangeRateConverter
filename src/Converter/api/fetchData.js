import { axios } from "../../lib/axios";
import { keyAPI } from "./keyApi";

export const fetchRates = async (currency1) => {
    const {data} = await axios.get(
        `/latest?base=${currency1}&apikey=${keyAPI}`
    );
    return data;
};

export const fetchSymbols = async () => {
    const {data} = await axios.get(
        `/symbols?apikey=${keyAPI}`
    );
    return data;
};