// import { createContext, useEffect, useState } from "react";
// import axios from 'axios';

// export const CoinContext = createContext();

// const CoinContextProvider = (props) => {
//   const [allCoin, setAllCoin] = useState([]); 
//   const [currency, setCurrency] = useState({
//     name: "usd",
//     symbol: "$"
//   });

//   useEffect(() => {
//     const fetchAllCoin = async () => {
//       try {
//         const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
//           params: {
//             vs_currency: currency.name,
//             order: 'market_cap_desc',
//             per_page: 100,
//             page: 1,
//             sparkline: false,
//           },
//           headers: {
//             accept: 'application/json',
//           },
//         });
        
//         setAllCoin(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchAllCoin();
//   }, [currency]);

//   const contextValue = {
//     allCoin,
//     currency,
//     setCurrency,
//   };

//   return (
//     <CoinContext.Provider value={contextValue}>
//       {props.children}
//     </CoinContext.Provider>
//   );
// };

// export default CoinContextProvider;



import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CoinContext = createContext();

const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState([]); // Stores the fetched coin data
  const [currency, setCurrency] = useState({ name: 'usd', symbol: '$' }); // Sets the default currency

  // Function to fetch all coins data using Axios
  const fetchAllCoins = async () => {
    try {
      // Axios GET request with query parameters to fetch coin data from the API
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
        params: {
          vs_currency: currency.name, // The currency to display prices in (e.g., USD)
          order: 'market_cap_desc',   // Sort by market capitalization
          per_page: 100,              // Number of coins to retrieve
          page: 1,                    // Page number
          sparkline: false            // Disable sparklines (mini-charts)
        }
      });
      setCoins(response.data); // Save the coin data in the state
    } catch (error) {
      console.error('Error fetching data:', error); // Logs error if request fails
    }
  };

  // useEffect hook to fetch the coins whenever currency changes
  useEffect(() => {
    fetchAllCoins(); // Fetch data on component mount or currency change
  }, [currency]); // Dependency array ensures function runs when currency is updated

  return (
    <CoinContext.Provider value={{ coins, currency, setCurrency }}>
      {children} 
    </CoinContext.Provider>
  );
};

export default CoinProvider;
