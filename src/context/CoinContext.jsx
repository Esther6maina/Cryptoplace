import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]); 
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$"
  });

  useEffect(() => {
    const fetchAllCoin = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
          params: {
            vs_currency: currency.name,
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false,
          },
          headers: {
            accept: 'application/json',
          },
        });
        
        setAllCoin(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
