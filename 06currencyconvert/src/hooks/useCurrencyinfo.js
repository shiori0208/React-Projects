import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});
    useEffect(() => {
     fetch(`https://v6.exchangerate-api.com/v6/0d927bd9714fa61bde9d930d/latest/${currency}`)
     .then((res) => res.json())
     .then((res) => setData(res[currency]))
    }, [currency])
    
    console.log(data);
    
    return data; 
}

export default useCurrencyInfo; 

