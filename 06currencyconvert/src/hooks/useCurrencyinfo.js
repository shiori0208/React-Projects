import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});
    useEffect(() => {
     fetch(`https://v6.exchangerate-api.com/v6/0d927bd9714fa61bde9d930d/latest/${currency}`)
     .then((res) => res.json())
     .then(res => {
        if (res.result === "success") {
          setData(res.conversion_rates);
        } else {
          setData({});
          console.error("Failed to fetch rates:", res["error-type"]);
        }
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setData({});
      });
  }, [currency]);

    

    
    return data; 
}

export default useCurrencyInfo; 

